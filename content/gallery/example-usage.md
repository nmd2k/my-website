---
title: "Gallery Shortcode Examples"
description: "Examples of how to use the gallery shortcode in your content"
date: 2024-01-01
type: gallery
images:
  - "/img/emnlp2023/2023_1205_19543500.jpg"
  - "/img/emnlp2023/2023_1211_09380600.jpg"
  - "/img/emnlp2023/2023_1211_09383000.jpg"
  - "/img/emnlp2023/2023_1211_09391900.jpg"
  - "/img/emnlp2023/2023_1211_09393100.jpg"
  - "/img/emnlp2023/2023_1211_09402000.jpg"
  - "/img/emnlp2023/2023_1211_09463300.jpg"
  - "/img/emnlp2023/2023_1211_09475300.jpg"
  - "/img/emnlp2023/2023_1211_09481500.jpg"
  - "/img/emnlp2023/2023_1211_09482100.jpg"
imageCaptions:
  "/img/emnlp2023/2023_1205_19543500.jpg": "Conference preparation day"
  "/img/emnlp2023/2023_1211_09380600.jpg": "Early morning at EMNLP 2023"
  "/img/emnlp2023/2023_1211_09383000.jpg": "Conference venue setup"
  "/img/emnlp2023/2023_1211_09391900.jpg": "Registration desk"
  "/img/emnlp2023/2023_1211_09393100.jpg": "Welcome coffee"
  "/img/emnlp2023/2023_1211_09402000.jpg": "Conference opening"
  "/img/emnlp2023/2023_1211_09463300.jpg": "Keynote session"
  "/img/emnlp2023/2023_1211_09475300.jpg": "Research discussions"
  "/img/emnlp2023/2023_1211_09481500.jpg": "Poster session setup"
  "/img/emnlp2023/2023_1211_09482100.jpg": "Interactive posters"
---

This page demonstrates how to use the gallery shortcode in your Hugo content.

## Basic Gallery

{{< gallery 
  images="/img/emnlp2023/2023_1205_19543500.jpg|/img/emnlp2023/2023_1211_09380600.jpg|/img/emnlp2023/2023_1211_09383000.jpg"
  columns="3"
>}}

## Two-Column Gallery

{{< gallery 
  images="/img/emnlp2023/2023_1205_19543500.jpg|/img/emnlp2023/2023_1211_09380600.jpg"
  columns="2"
>}}

## Single Image Gallery

{{< gallery 
  images="/img/emnlp2023/2023_1205_19543500.jpg"
  columns="1"
>}}

## Using the Shortcode in Other Content

You can embed galleries anywhere in your content using the shortcode:

```markdown
{{< gallery 
  images="/img/emnlp2023/2023_1205_19543500.jpg|/img/emnlp2023/2023_1211_09380600.jpg|/img/emnlp2023/2023_1211_09383000.jpg"
  columns="3"
  id="my-event-gallery"
>}}
```

The shortcode supports:
- **images**: Pipe-separated list of image paths
- **columns**: Number of columns (default: 3)
- **id**: Unique identifier for the gallery (optional)

## Enhanced Photo Slider Features

This gallery now includes an enhanced photo slider with:

- **Photo Counter**: Shows current position (e.g., "3 / 10")
- **Large Navigation Buttons**: Prominent left/right arrows
- **Thumbnail Navigation**: Click thumbnails to jump to specific photos
- **Keyboard Support**: Use arrow keys to navigate
- **Smooth Animations**: Hover effects and transitions
- **Responsive Design**: Works on all devices

**Try it out**: Click on any image above to see the enhanced slider in action!
