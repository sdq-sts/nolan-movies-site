export default {
  name: 'Christopher Nolan',

  bio: `Cineasta, roteirista e produtor. Estreou em direção cinematográfica com Following (1988), mas passou a ganhar fama com o seu segundo título, o thriller psicológico Memento (2000).
    A aclamação recebida por essas duas produçoes independentes deu ao profissional a oportunidade de realizar Insomnia (2002), seu primeiro projeto de grande orçamento e o drama de mistério The Prestige (2006).
    O cineasta, contudo, alcançou o sucesso tanto comercial quanto de crítica com a trilogia protagonizada pelo personagem Batman, intitulada The Dark Knight (2005-2012), também com Inception (2010), Interstellar (2014), ambos com fortes influências de ficção científica, e seu épico de Segunda Guerra Mundial, Dunkirk (2017).

    Suas obras costumam carregar fortes influências filosóficas, sociológicas e éticas, a partir de conceitos que exploram temas como moralidade humana, a construção do tempo e a natureza maleável da memória e da indentidate pessoal.
    Seu trabalho é permeado de elementos metafíctícios, deslocações temporais, perspectivas solipsistas, narrativa não linear e relações análogas entre a linguagem visual e os elementos narrativos.
    Christopher é tido como um dos ma  is inovativos contadores de história e criadores de imagem em atividade na indústria cinematográfica contemporânea e é comumente elogiago pela crítica por integrar elementos do cinema de arte ao formato de blockbuster.`,

  images: [
    require('./images/nolan/bio_img-1.jpg'),
    require('./images/nolan/bio_img-2.jpg'),
    require('./images/nolan/bio_img-3.jpg'),
    require('./images/nolan/bio_img-4.jpg')
  ],

  siteTitle: ['The', 'Dream is', 'Real.'],
  siteSubtitle: ['The', 'Dream is', 'Real.'],
  siteDescription: 'Uma pequena seleção dos meus filmes favoritos do Christopher Nolan',

  menu: [
    { name: 'Biografia', link: 'https://www.imdb.com/name/nm0634240/bio?ref_=nm_ql_1' },
    { name: 'Filmografia', link: 'https://www.imdb.com/name/nm0634240/?nmdp=1&ref_=nm_ql_4#filmography'},
    { name: 'Galeria de imagens', link: 'https://www.imdb.com/name/nm0634240/mediaindex?ref_=nm_ql_3' },
    { name: 'Vídeos', link: 'https://www.imdb.com/name/nm0634240/videogallery?ref_=nm_ql_5' }
  ],

  social: {
    facebook: 'http://facebook.com/profile.php?=73322363',
    instagram: 'https://www.instagram.com/',
    twitter: 'https://twitter.com/',
    pinterest: 'https://www.pinterest.com',
    email: '#'
  },

  movies: [
    require('./movies/memento').default,
    require('./movies/batman').default,
    require('./movies/dunkirk').default,
    require('./movies/inception').default,
    require('./movies/interstellar').default
  ]
}
