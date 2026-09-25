# Gera base-mysql.sql a partir dos CSV desta pasta, para importar no phpMyAdmin.
# Rodar depois de montar.py: python3 exportar_mysql.py
# Números sem UNSIGNED de propósito: subtrações como aptos - LAG(aptos) podem dar negativo.
import csv

TABELAS = {
    "estados": """CREATE TABLE estados (
  codigo_uf TINYINT NOT NULL,
  uf CHAR(2) NOT NULL,
  nome VARCHAR(40) NOT NULL,
  regiao VARCHAR(20) NOT NULL,
  area_km2 INT NOT NULL,
  latitude DECIMAL(9,6) NOT NULL,
  longitude DECIMAL(9,6) NOT NULL,
  PRIMARY KEY (codigo_uf)
)""",
    "municipios": """CREATE TABLE municipios (
  codigo_ibge INT NOT NULL,
  nome VARCHAR(60) NOT NULL,
  codigo_uf TINYINT NOT NULL,
  capital TINYINT(1) NOT NULL,
  latitude DECIMAL(9,6) NOT NULL,
  longitude DECIMAL(9,6) NOT NULL,
  ddd TINYINT NOT NULL,
  fuso_horario VARCHAR(40) NOT NULL,
  PRIMARY KEY (codigo_ibge),
  FOREIGN KEY (codigo_uf) REFERENCES estados (codigo_uf)
)""",
    "votacao": """CREATE TABLE votacao (
  codigo_ibge INT NOT NULL,
  ano SMALLINT NOT NULL,
  turno TINYINT NOT NULL,
  data_eleicao DATE NOT NULL,
  cargo VARCHAR(30) NOT NULL,
  aptos INT NOT NULL,
  secoes INT NOT NULL,
  comparecimento INT NOT NULL,
  abstencoes INT NOT NULL,
  votos_validos INT NOT NULL,
  votos_brancos INT NOT NULL,
  votos_nulos INT NOT NULL,
  votos_nominais INT NOT NULL,
  votos_legenda INT NOT NULL,
  PRIMARY KEY (codigo_ibge, ano, turno, cargo),
  FOREIGN KEY (codigo_ibge) REFERENCES municipios (codigo_ibge)
)""",
    # codigo_ibge vazio = cargo disputado no estado inteiro (governador, senador, deputados)
    "vagas": """CREATE TABLE vagas (
  codigo_ibge INT NULL,
  ano SMALLINT NOT NULL,
  cargo VARCHAR(30) NOT NULL,
  vagas SMALLINT NOT NULL,
  KEY (codigo_ibge, ano),
  FOREIGN KEY (codigo_ibge) REFERENCES municipios (codigo_ibge)
)""",
}

def valor(v):
    if v == "":
        return "NULL"
    try:
        float(v)
        return v
    except ValueError:
        return "'" + v.replace("\\", "\\\\").replace("'", "''") + "'"

with open("base-mysql.sql", "w", encoding="utf-8", newline="\n") as f:
    f.write("-- Laboratório TÁLAMO: base de exercícios de SQL (dados públicos: IBGE e TSE).\n"
            "-- Importar no phpMyAdmin: escolher o banco, aba Importar, escolher este arquivo.\n"
            "-- Reimportar apaga e recria as 4 tabelas.\n\n"
            "SET NAMES utf8mb4;\nSET FOREIGN_KEY_CHECKS = 0;\n")
    for t in reversed(TABELAS):
        f.write(f"DROP TABLE IF EXISTS {t};\n")
    for t, criar in TABELAS.items():
        f.write(f"\n{criar} ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n")
        with open(f"{t}.csv", encoding="utf-8") as c:
            cab, *linhas = list(csv.reader(c))
        for i in range(0, len(linhas), 500):
            f.write(f"INSERT INTO {t} ({', '.join(cab)}) VALUES\n")
            f.write(",\n".join("(" + ",".join(valor(v) for v in l) + ")" for l in linhas[i:i + 500]) + ";\n")
    f.write("\nSET FOREIGN_KEY_CHECKS = 1;\n")
