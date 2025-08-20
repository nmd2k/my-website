# Gallery System Documentation

This Hugo theme now includes a comprehensive gallery system that allows you to showcase your photos and images with a beautiful, responsive design and lightbox functionality.

## Features

- **Responsive Grid Layout**: Automatically adjusts to different screen sizes
- **Lightbox Gallery**: Click on images to view them in full-screen with navigation
- **Image Captions**: Support for descriptive captions on each image
- **Lazy Loading**: Images load as needed for better performance
- **Keyboard Navigation**: Use arrow keys and Escape in lightbox mode
- **Touch-Friendly**: Works great on mobile devices
- **Accessibility**: Proper focus management and screen reader support

## Gallery Structure

### 1. Main Gallery Page

The main gallery page is located at `content/gallery/_index.md` and displays all gallery entries in a grid layout.

### 2. Individual Gallery Entries

Create individual gallery entries in the `content/gallery/` directory. Each entry should have:

```yaml
---
title: "Gallery Title"
description: "Description of the gallery"
date: 2024-01-01
type: gallery
images:
  - src: "img/folder/image1.jpg"
    alt: "Alt text for image"
    caption: "Caption for the image"
  - src: "img/folder/image2.jpg"
    alt: "Alt text for image 2"
    caption: "Caption for image 2"
---
```

### 3. Image Organization

Store your images in the `static/img/` directory. You can organize them in subdirectories:

```
static/img/
├── emnlp2023/
│   ├── image1.jpg
│   ├── image2.jpg
│   └── ...
├── iclr2025/
│   ├── image1.jpg
│   └── ...
└── travel/
    ├── image1.jpg
    └── ...
```

## Usage Examples

### Creating a New Gallery Entry

1. Create a new markdown file in `content/gallery/` (e.g., `my-trip.md`)
2. Add the front matter with your images:

```yaml
---
title: "My Trip to Japan"
description: "Photos from my amazing trip to Japan"
date: 2024-01-15
type: gallery
images:
  - src: "img/japan/tokyo.jpg"
    alt: "Tokyo skyline"
    caption: "Beautiful Tokyo skyline at sunset"
  - src: "img/japan/kyoto.jpg"
    alt: "Kyoto temple"
    caption: "Ancient temple in Kyoto"
---
```

### Using the Gallery Shortcode

You can also embed galleries directly in your content using the shortcode:

```markdown
{{< gallery 
  images="img/event1.jpg|img/event2.jpg|img/event3.jpg"
  columns="3"
  id="my-event-gallery"
>}}
```

Or with more detailed configuration:

```markdown
{{< gallery 
  images="img/event1.jpg|img/event2.jpg|img/event3.jpg"
  columns="2"
  id="my-event-gallery"
>}}
```

## Customization

### CSS Variables

The gallery uses CSS custom properties that inherit from your theme. You can override them in your custom CSS:

```css
:root {
  --gallery-border-radius: 8px;
  --gallery-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --gallery-hover-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

### Layout Customization

You can customize the gallery layout by modifying:

- `layouts/gallery/list.html` - Main gallery listing page
- `layouts/gallery/single.html` - Individual gallery page
- `layouts/shortcodes/gallery.html` - Gallery shortcode
- `assets/css/common/gallery.css` - Gallery styles

## Responsive Design

The gallery automatically adapts to different screen sizes:

- **Desktop**: Multi-column grid layout
- **Tablet**: Reduced columns for medium screens
- **Mobile**: Single column layout for small screens

## Performance Features

- **Lazy Loading**: Images load only when needed
- **Optimized CSS**: Minimal CSS footprint
- **Efficient JavaScript**: Lightweight lightbox implementation
- **Image Optimization**: Use appropriate image sizes for web

## Browser Support

- **Modern Browsers**: Full support for all features
- **Older Browsers**: Graceful degradation for older versions
- **Mobile Browsers**: Touch-optimized interactions

## Troubleshooting

### Images Not Displaying

1. Check that image paths are correct relative to `static/`
2. Ensure images exist in the specified locations
3. Verify image file permissions

### Lightbox Not Working

1. Check browser console for JavaScript errors
2. Ensure no conflicting JavaScript libraries
3. Verify that images have proper `src` attributes

### Layout Issues

1. Check CSS conflicts with your theme
2. Verify that gallery CSS is being loaded
3. Test responsive behavior on different screen sizes

## Future Enhancements

Potential improvements for the gallery system:

- **Image Zoom**: Pinch-to-zoom on mobile devices
- **Slideshow Mode**: Automatic slideshow functionality
- **Filtering**: Category-based image filtering
- **Search**: Image search functionality
- **Social Sharing**: Easy sharing of individual images
- **Download**: Direct image download links

## Support

If you encounter any issues with the gallery system:

1. Check this documentation first
2. Review the Hugo documentation for general issues
3. Check browser console for error messages
4. Verify file paths and permissions

## License

This gallery system is part of your Hugo theme and follows the same license terms.
