## Ramas en GitHub

- Listar todas las ramas locales que hay en el repositorio. Resalta con otro color y un asterisco la rama donde están ubicadas

  ```bash
  git branch
  ```

- Crear una rama nueva

  ```bash
  git branch nombreDeRama
  ```

- Cambiar entre ramas del repositorio

  ```bash
  git checkout nombreDeRama
  ```

- Crear y cambiar a una nueva rama con un solo comando

  ```bash
  git checkout -b nombreDeRama
  ```

- Eliminar una rama localmente

  ```bash
  git branch -d nombreDeRama
  ```

- Traer todos los cambios de la rama

  ```bash
  git pull origin nombreDeRama
  ```

## GitHub Pages

- Crear un nuevo repositorio que debe tener como archivo principal su `ìndex.html`
- Guardar y subir todos los cambios
- Publicar el sitio desde pages
- Ir a `Settigs` → `Pages`
- Dentro de la seccion branch, seleccionar su rama principal `main`
- Dar en Save y esperar unos minutos

## Flujo de trabajo en colaboracion. GitHub

### Fork ¿Si o No?

- **Fork**: Sirve cuando no tenés permisos de colaborador en el repositorio original. Un fork crea una copia del repositorio en su cuenta de GitHub

- **Colaborador**: Si han agregado un colaborador a su repositorio, **NO es necesario hacer un fork**. Pueden trabajar directamente desde el repositorio original, como si fuese suyo.

### Clonar el repositorio

```bash
git clone origin https://github.com/usuarioGitHub/repositorioGitHub.git
```

### Creacion y uso de ramas

Para evitar conflictos a la hora de trabajar sobre el mismo proyecto, **cada colaborador debera crear su propia rama**

1. Primero, asegúrate de estar en la rama principal (`main`) y que tu copia local esté actualizada:

```bash
git checkout main
git pull origin main
```

2. Luego crea una nueva rama para tu trabajo. Esta rama debe tener un nombre descriptivo de la funcionalidad

```bash
git checkout -b nombreDeRama
```

### Subir y fusionar los cambios

Cada colaborador debera subir sus cambios trabajados desde su rama

```bash
git add .
git commit -m "Comentario relacionado"
git push origin nombreDeRama
```

### Hacer Pull Request desde GitHub resolviendo todos los conflictos

### Actualizar tu rama con los últimos cambios

Es importante que, antes de fusionar tu rama en `main`, te asegures de tener los cambios más recientes del repositorio remoto.

1. Desde tu rama de trabajo, debes traer los cambios de la rama `main` para evitar conflictos cuando se intente fusionar tu PR:

```bash
git checkout main
git pull origin main
```

2. Luego, vuelve a tu rama de trabajo y fusiona los cambios de la rama `main` en ella:

```bash
git checkout nombreDeRama
git merge main
```

Resuelve cualquier conflicto que surja durante la fusión.

3. Después de resolver los conflictos, sube los cambios:

```bash
git add .
git commit -m "Resolví conflictos con la rama main"
git push origin nombreDeRama
```

Una vez hecho esto, tu rama estará actualizada con los últimos cambios y lista para fusionarse en la rama principal.

### Fusionar ramas en la principal

Cuando el equipo esté de acuerdo en que la funcionalidad de tu rama está completa y ha sido revisada, puedes fusionar tu rama en `main`.

Desde la rama `main`, ejecuta:

```bash
git merge nombreDeRama
```

Por último, sube la rama principal actualizada al repositorio remoto:

```bash
git push origin main
```

> [!CAUTION]
> Los merge y PR se pueden hacer directamente desde a pagina de github
