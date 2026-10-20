# Noticias Diarias

Página web de noticias por categorías: **Deportes, Cine, Finanzas y Política**.

## Cómo actualizar las noticias cada día

1. Entra al archivo `data/noticias.json`.
2. Pulsa el lápiz (✏️ Edit).
3. Agrega o edita noticias usando este formato:

```json
{
 "categoria": "deportes",
 "titulo": "Título de la noticia",
 "resumen": "Resumen corto de la noticia",
 "imagen": "https://enlace-de-la-imagen.jpg",
 "fuente": "Nombre del medio",
 "url": "https://enlace-a-la-noticia",
 "fecha": "2026-10-19"
}
```

4. Pulsa **Commit changes**.
5. La página se actualizará sola (recarga con Ctrl+F5 si no ves cambios).

Categorías válidas: `deportes`, `cine`, `finanzas`, `politica`.

## Activar la página web (GitHub Pages)

1. Ve a **Settings → Pages**.
2. En *Source* elige **Deploy from a branch**.
3. Selecciona la rama **main** y la carpeta **/ (root)**.
4. Guarda. En unos minutos tu página estará en:

`https://tonycardo.github.io/noticias-diarias/`
