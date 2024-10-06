var script = document.createElement('script');
script.type = "application/ld+json";
script.text = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Periculum RPG",
  "description": "Periculum RPG é um role-playing game inspirado no mundo mágico pós-guerra de Harry Potter, cheio de aventuras e mistérios.",
  "genre": "RPG",
  "audience": {
    "@type": "PeopleAudience",
    "suggestedMinAge": "14"
  },
  "author": {
    "@type": "Organization",
    "name": "Periculum RPG"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Periculum RPG"
  }
});
document.head.appendChild(script);