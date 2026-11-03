# Venue photos

## The easy way
1. Upload your photos to this folder. Any filename is fine, such as `IMG_2431.jpg`.
2. Tell Claude which place each photo shows.

Claude will rename, resize and compress each photo so the page stays fast, then add it to the guide.

## Doing it yourself
1. Upload the photo to this folder.
2. In `index.html`, find `const PHOTOS = {` and add a line with the place name and the file:

```
const PHOTOS = {
  "Babbo": "images/babbo.jpg",
  "Via Carota": "images/via-carota.jpg",
};
```

Use the place name exactly as it appears on the site. Cards without a photo keep their illustration.

## Tips for good photos
- Hold the phone sideways. Cards are wide, so landscape photos fit best.
- Good subjects include a signature dish, a cocktail on the bar, the dining room or the view.
- Natural light beats flash. Get close to the food or drink.
- Only use photos you took yourself, or ones the venue has said you may use.
