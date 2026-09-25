# Monta estados.csv e municipios.csv a partir das fontes públicas.
# Rodar (numa sessão com Python): python3 montar.py
# Não precisa rodar de novo: os CSV já estão na pasta. Serve para documentar a origem.
import csv, io, urllib.request

MUNICIPIOS = "https://raw.githubusercontent.com/kelvins/municipios-brasileiros/main/csv/municipios.csv"
ESTADOS    = "https://raw.githubusercontent.com/kelvins/municipios-brasileiros/main/csv/estados.csv"
AREAS      = "https://raw.githubusercontent.com/datasets-br/state-codes/master/data/br-state-codes.csv"

def ler(url):
    texto = urllib.request.urlopen(url).read().decode("utf-8-sig")
    return list(csv.DictReader(io.StringIO(texto)))

area = {l["subdivision"]: l["km2"] for l in ler(AREAS) if l["km2"]}

with open("estados.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["codigo_uf", "uf", "nome", "regiao", "area_km2", "latitude", "longitude"])
    for e in ler(ESTADOS):
        w.writerow([e["codigo_uf"], e["uf"], e["nome"], e["regiao"], area[e["uf"]], e["latitude"], e["longitude"]])

with open("municipios.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["codigo_ibge", "nome", "codigo_uf", "capital", "latitude", "longitude", "ddd", "fuso_horario"])
    for m in sorted(ler(MUNICIPIOS), key=lambda m: int(m["codigo_ibge"])):
        w.writerow([m["codigo_ibge"], m["nome"], m["codigo_uf"], m["capital"], m["latitude"], m["longitude"], m["ddd"], m["fuso_horario"]])

# Eleições (TSE), redistribuídas pela Base dos Dados (basedosdados.org), arquivos gratuitos.
# Só Santa Catarina e só eleições ordinárias (sem as suplementares).
import gzip
BD = "https://storage.googleapis.com/basedosdados-public/one-click-download/br_tse_eleicoes/"

def ler_gz(tabela):
    dados = gzip.decompress(urllib.request.urlopen(BD + tabela + "/" + tabela + ".csv.gz").read())
    return [l for l in csv.DictReader(io.StringIO(dados.decode("utf-8")))
            if l["sigla_uf"] == "SC" and l["tipo_eleicao"] == "eleicao ordinaria"]

COLS = ["ano", "turno", "data_eleicao", "cargo", "aptos", "secoes", "comparecimento", "abstencoes",
        "votos_validos", "votos_brancos", "votos_nulos", "votos_nominais", "votos_legenda"]
with open("votacao.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["codigo_ibge"] + COLS)
    for l in sorted(ler_gz("detalhes_votacao_municipio"), key=lambda l: (l["ano"], l["turno"], l["id_municipio"], l["cargo"])):
        w.writerow([l["id_municipio"]] + [l[c] for c in COLS])

with open("vagas.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["codigo_ibge", "ano", "cargo", "vagas"])
    for l in sorted(ler_gz("vagas"), key=lambda l: (l["ano"], l["id_municipio"], l["cargo"])):
        w.writerow([l["id_municipio"], l["ano"], l["cargo"], l["vagas"]])
