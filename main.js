const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1500,
  };
  
  ScrollReveal().reveal(".search_bar", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".logo_ul", {
    ...scrollRevealOption,
    origin: "top",
  });
  ScrollReveal().reveal(".container3", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".txt h1", {
    ...scrollRevealOption,
    origin: "left",
  });
  
  ScrollReveal().reveal(".txt p", {
      ...scrollRevealOption,
  });

  ScrollReveal().reveal(".txt button", {
      ...scrollRevealOption,
  });
  
  Scro