$(document).ready(function(){
    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });

      //post
      var posts=
      [
       {
         title:'Prueba titulo 1',
         date: 'Publicado el: '+ moment().date() + " de " + moment().format("MMMM") + " del año " +moment().format("Y"),
         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lorem ac ullamcorper ornare. Aliquam id orci enim. Nullam ultricies ex quis augue sollicitudin dignissim. Proin cursus odio in porta pulvinar. Aliquam posuere, arcu in fringilla pharetra, odio erat finibus ipsum, in posuere purus lorem sit amet ante. Ut vitae dolor volutpat, lobortis sem vel, auctor neque. Vivamus imperdiet dolor nunc. Phasellus tincidunt fermentum nisl a blandit. Quisque at magna convallis, luctus urna vel, faucibus augue. Donec aliquet, ligula id cursus aliquet, leo tellus fermentum orci, vel imperdiet erat massa eget ex. Nullam rhoncus justo at augue pretium maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet justo at vehicula.'

       },
       {
         title:'Prueba titulo 2',
       date: 'Publicado el: '+ moment().date() + " de " + moment().format("MMMM") + " del año " +moment().format("Y"),
       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lorem ac ullamcorper ornare. Aliquam id orci enim. Nullam ultricies ex quis augue sollicitudin dignissim. Proin cursus odio in porta pulvinar. Aliquam posuere, arcu in fringilla pharetra, odio erat finibus ipsum, in posuere purus lorem sit amet ante. Ut vitae dolor volutpat, lobortis sem vel, auctor neque. Vivamus imperdiet dolor nunc. Phasellus tincidunt fermentum nisl a blandit. Quisque at magna convallis, luctus urna vel, faucibus augue. Donec aliquet, ligula id cursus aliquet, leo tellus fermentum orci, vel imperdiet erat massa eget ex. Nullam rhoncus justo at augue pretium maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet justo at vehicula.'
      },
       {
        title:'Prueba titulo 3',
        date: 'Publicado el: '+ moment().date() + " de " + moment().format("MMMM") + " del año " +moment().format("Y"),
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lorem ac ullamcorper ornare. Aliquam id orci enim. Nullam ultricies ex quis augue sollicitudin dignissim. Proin cursus odio in porta pulvinar. Aliquam posuere, arcu in fringilla pharetra, odio erat finibus ipsum, in posuere purus lorem sit amet ante. Ut vitae dolor volutpat, lobortis sem vel, auctor neque. Vivamus imperdiet dolor nunc. Phasellus tincidunt fermentum nisl a blandit. Quisque at magna convallis, luctus urna vel, faucibus augue. Donec aliquet, ligula id cursus aliquet, leo tellus fermentum orci, vel imperdiet erat massa eget ex. Nullam rhoncus justo at augue pretium maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet justo at vehicula.'
       },
       {
        title:'Prueba titulo 85',
        date: 'Publicado el: '+ moment().date() + " de " + moment().format("MMMM") + " del año " +moment().format("Y"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla lorem ac ullamcorper ornare. Aliquam id orci enim. Nullam ultricies ex quis augue sollicitudin dignissim. Proin cursus odio in porta pulvinar. Aliquam posuere, arcu in fringilla pharetra, odio erat finibus ipsum, in posuere purus lorem sit amet ante. Ut vitae dolor volutpat, lobortis sem vel, auctor neque. Vivamus imperdiet dolor nunc. Phasellus tincidunt fermentum nisl a blandit. Quisque at magna convallis, luctus urna vel, faucibus augue. Donec aliquet, ligula id cursus aliquet, leo tellus fermentum orci, vel imperdiet erat massa eget ex. Nullam rhoncus justo at augue pretium maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt sit amet justo at vehicula.'

       },
      ];

     posts.forEach((item, index)=>{
           var post = `
           <article class="post">
           <h2>${item.title}</h2>
           <span class="date">${item.date}</span>
           <p>
              ${item.content}
           </p>
           <a href="#" class="button-more">Leer Más</a>
       </article>
           `;

          $("#posts").append(post);

     });



});