-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "faculdade" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "itinerario" INTEGER,
    "fotoB64" TEXT,
    "ordem" INTEGER,
    "presenca" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "habilitacao" TEXT NOT NULL,
    "itinerario" INTEGER,
    "fotoB64" TEXT
);

-- CreateTable
CREATE TABLE "Van" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "modelo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "capacidade" TEXT NOT NULL,
    "itinerario" INTEGER,
    "ano" TEXT NOT NULL,
    "cor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "fotoB64" TEXT
);

-- CreateTable
CREATE TABLE "Itinerario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "inicio" TEXT NOT NULL,
    "cep_inicio" TEXT NOT NULL,
    "cidade_inicio" TEXT NOT NULL,
    "bairro_inicio" TEXT NOT NULL,
    "rua_inicio" TEXT NOT NULL,
    "numero_inicio" TEXT NOT NULL,
    "final" TEXT NOT NULL,
    "cep_final" TEXT NOT NULL,
    "cidade_final" TEXT NOT NULL,
    "bairro_final" TEXT NOT NULL,
    "rua_final" TEXT NOT NULL,
    "numero_final" TEXT NOT NULL,
    "motorista" INTEGER,
    "van" INTEGER
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_email_key" ON "Driver"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Van_placa_key" ON "Van"("placa");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Itinerario_nome_key" ON "Itinerario"("nome");
