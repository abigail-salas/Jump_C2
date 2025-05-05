# Introduccion a Git y GitHub

## Comandos Basicos de consola:

- `cd`: Cambia al directorio principal
- `cd ruta`: Navega al directorio indicado
- `cd ..`: Vuelve un directorio atrás

- `ls`: Lista todas las carpetas y/o archivos en el directorio
- `ls -a`: Incluye una lista de los archivos ocultos

- `pwd`: Muestra la ruta completa del directorio

- `mkdir nombreCarpeta`: Crea una nueva carpeta
- `touch nombreArchivo`: Crea un nuevo archivo
> [!WARNING]
> Tiene que incluir SIEMPRE el tipo de archivo, por ejemplo .html, .css, .md

## Configurando Git por primera vez

1. Configurar tu nombre de usuario de GITHUB

```bash
git config --global user.name "nombreDeUsuarioDeGitHub"
```

2. Configurar tu correo electronico de GITHUB

```bash
git config --global user.email "emailDeGitHub@mail.com"
```

### Verificar que todo esté correcto:

- ```bash
    git config --list
  ```
> [!NOTE]
> Devuelve una lista completa de configuracion de usuario

- ```bash
    git config user.name
  ```
> [!NOTE]
> Devuelve tu nombre de usuario

## Inicializando un nuevo proyecto/Repositorio con comandos que nos da GitHub por default

```bash
echo "# Jump-C2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/abigail-salas/Jump-C2.git
git push -u origin main
```
> [!NOTE]
> ↑↑↑↑↑ Serie de comandos que da github a la hora de crear un nuevo repositorio

1. `echo "# Jump-C2" >> README.md` (opcional)

   - Crea un archivo README.md en el directorio inidicado con el contenido del titulo del repositorio

2. `git init` (se usa **una sola vez, _OBLIGATORIO_**)

   - Inicializa un nuevo repositorio de Git en el directorio indicado

3. `git add README.md` o `git add .` (se va a utilizar en más de una ocasion)

   - Agrega el archivo "README.md" (puede ser cualquier otro archivo o carpeta) en el area de preparacion o agrega _todos los archivos y carpetas_ con `git add .`

4. `git commit -m "first commit"` (se va a utilizar en más de una ocasion)

   - Registra todos los cambios que se agregaron al area de preparacion (con el comando anterior), con el comentario "first commit". Lo que esta entre comillas va a variar dependiendo del cambio realizado

5. `git branch -M main` (se usa **una sola vez, _OBLIGATORIO_**)

   - Crea y cambia a la rama "main", que será la rama principal

6. `git remote add origin https://github.com/abigail-salas/Jump-C2.git` (se usa **una sola vez, _OBLIGATORIO_**)

   - Enlaza tu repositorio local con el respositorio remoto de GitHub

7. `git push -u origin main` (se va a utilizar en más de una ocasion pero sin el -u)

   - Sube todos los cambios realizados que esten en el area de preparacion

## Inicializando un nuevo proyecto/Repositorio con comandos propios

> [!CAUTION] 
> **Se utiliza una sola vez de manera _OBLIGATORIA_**

1. Inicializa un nuevo repositorio de Git en el directorio indicado

   ```bash
   git init
   ```

2. Crea y cambia a la rama "main", que será la rama principal

   ```bash
   git branch -M main
   ```

3. Enlaza tu repositorio local con el respositorio remoto de GitHub

   ```bash
   git remote add origin https://github.com/abigail-salas/Jump-C2.git
   ```

## Guardar cambios y subirlos al repositotio

> [!IMPORTANT]
> Se utiliza en más de una ocasion

Cada vez que realices un cambio importante en tu código, se realizan los siguientes comandos:

1. Agrega _todos los archivos y carpetas_ modificados al area de preparacion

   ```bash
   git add .
   ```

2. Registra todos los cambios que se agregaron al area de preparacion (con el comando anterior). Lo que esta entre comillas va a variar dependiendo del cambio realizado

   ```bash
   git commit -m "comentario relacionado al cambio realizado"
   ```

3. Sube todos los cambios realizados que esten en el area de preparacion

   ```bash
   git push origin main
   ```
