
import Title from './components/Title/title'
import Links from './components/Links/Links'
import './App.css'
import { Background } from './components/Background/background'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Planets1 } from './components/planets1/planets'
import { Planets2 } from './components/planets2/planets2'
import { ArtPrices } from './components/artPrices/artPrices'
import sparky from './img/sparkymeteorito.png'
import { Skull } from './components/skull/skull'
import { useState } from 'react'
import { GoUpButton } from './components/Goupbutton/GoUpButton'



function App() {

const [charged, setCharged] =useState('uncharged')
const [hide, setHide] =useState('')
const [disapear, setdissapear] =useState(false)


setTimeout(() => {
  setCharged('charged')
  setHide('hide')
  
}, 1700);

setTimeout(() => {
  setdissapear(true)
  
}, 3000);



   return (
     <>
      
      <div className='AppContainer' id='title'>

      <div className={hide}>
    {
      !disapear && <Skull/>
    }
    </div>
    
    <div className={charged} >
     <Background/>
    
      <Title/>
    
    <ParallaxProvider>
      <Planets1/>
    </ParallaxProvider>

      <Links/> 
    
    <ParallaxProvider>
      <Planets2/>
    </ParallaxProvider>
    
    <ParallaxProvider>
    <ArtPrices/>
    </ParallaxProvider>

    <GoUpButton/>
    
    

    
    {/* <img className='sparkymirando' src={sparky} alt="" /> */}
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ea fuga! Aliquid vitae enim, facilis tempora nisi omnis libero sunt illum minus iste aperiam porro, ea, similique aspernatur qui optio sit delectus commodi temporibus fugiat dolorum deleniti. Nulla voluptas officia nam sunt est autem, neque exercitationem earum magnam qui illo officiis molestiae laudantium ullam mollitia iste maiores libero quod eius assumenda ipsam fugit! Blanditiis, nemo labore! Cum aliquam consectetur ducimus quidem voluptate veritatis similique quam ex accusantium qui vero est illum, dolorem ipsam inventore modi quis maiores necessitatibus numquam! Quis corporis, placeat at explicabo cupiditate quo, optio eaque asperiores aliquid rerum praesentium unde ab aut iste adipisci fugiat. Fuga laborum ducimus natus fugit dolor! Pariatur, quibusdam ipsam odio molestias aspernatur iusto debitis soluta sunt voluptates deserunt eos maxime consequuntur cupiditate, minima quisquam perferendis? Nulla consequatur accusantium unde rerum dolorem impedit, magnam nobis facilis ea cum ipsum accusamus, modi provident neque dolorum laudantium dolores obcaecati necessitatibus sint iusto doloremque iure non, dolore veritatis? Reiciendis adipisci excepturi beatae exercitationem debitis voluptatum. Eaque sed quia dolore facere error iste dicta repudiandae incidunt quisquam ea cumque nemo alias autem possimus tenetur harum sapiente atque, laboriosam pariatur quidem aperiam. Dolore facilis recusandae accusamus atque odit ipsum est possimus molestias eos unde. Rem facere aliquid ut repudiandae, explicabo maiores, ipsum hic sequi quidem facilis unde quia ratione eligendi ullam consequatur. Ipsam consequuntur commodi, magnam tenetur eos dignissimos aut, facere neque hic reprehenderit cum, vel soluta culpa unde nostrum eaque quae consectetur ad. Id facilis perferendis temporibus et reiciendis non placeat sint totam quo, vitae earum at sequi voluptatibus repellat ea deleniti ad, magni nam quisquam ab modi? Dolores exercitationem magnam ratione pariatur esse fugiat consequuntur distinctio quo rerum ullam. Expedita ab nostrum ducimus. Harum sint earum eaque accusantium ut amet magnam vitae doloribus excepturi dolores possimus, ullam sit voluptates fugit. Assumenda quasi quos ullam illum rerum labore adipisci vitae incidunt? Voluptate, doloribus consectetur. Aperiam impedit dolor animi maxime exercitationem, facere tempora reiciendis pariatur quo ut obcaecati aliquid accusantium nisi, doloribus, iusto asperiores vel quibusdam dolorum! Minus, atque? Possimus non consequuntur nesciunt saepe est blanditiis exercitationem doloremque, corrupti ullam placeat deserunt nam perspiciatis temporibus aperiam. At in sed doloremque dolor a amet quas sint quibusdam nobis voluptatem. Incidunt natus consectetur laboriosam tempora nisi cumque similique inventore beatae tempore reiciendis a, corrupti, sit, sequi odio. Reprehenderit nobis ipsum illum ipsa alias beatae, magnam consequatur dolorem perferendis quidem ab commodi deserunt, expedita quaerat earum voluptates labore. Unde enim minus vel id illo in laborum perferendis aperiam dolore maxime temporibus cumque earum, molestiae laudantium fuga quia? Necessitatibus architecto obcaecati aut repellat nemo provident nostrum nobis pariatur qui quisquam consequuntur, omnis assumenda quam animi alias, delectus est odio recusandae accusamus neque eligendi, id totam! Debitis impedit quasi id unde harum excepturi non amet voluptatum incidunt asperiores atque accusantium optio necessitatibus animi corrupti, ex aperiam accusamus ab maxime perspiciatis, aut qui numquam, libero illum. Pariatur vitae, dignissimos vel error sequi modi corrupti quidem quod nulla minus. Iste, magnam. Exercitationem, magnam accusamus?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ea fuga! Aliquid vitae enim, facilis tempora nisi omnis libero sunt illum minus iste aperiam porro, ea, similique aspernatur qui optio sit delectus commodi temporibus fugiat dolorum deleniti. Nulla voluptas officia nam sunt est autem, neque exercitationem earum magnam qui illo officiis molestiae laudantium ullam mollitia iste maiores libero quod eius assumenda ipsam fugit! Blanditiis, nemo labore! Cum aliquam consectetur ducimus quidem voluptate veritatis similique quam ex accusantium qui vero est illum, dolorem ipsam inventore modi quis maiores necessitatibus numquam! Quis corporis, placeat at explicabo cupiditate quo, optio eaque asperiores aliquid rerum praesentium unde ab aut iste adipisci fugiat. Fuga laborum ducimus natus fugit dolor! Pariatur, quibusdam ipsam odio molestias aspernatur iusto debitis soluta sunt voluptates deserunt eos maxime consequuntur cupiditate, minima quisquam perferendis? Nulla consequatur accusantium unde rerum dolorem impedit, magnam nobis facilis ea cum ipsum accusamus, modi provident neque dolorum laudantium dolores obcaecati necessitatibus sint iusto doloremque iure non, dolore veritatis? Reiciendis adipisci excepturi beatae exercitationem debitis voluptatum. Eaque sed quia dolore facere error iste dicta repudiandae incidunt quisquam ea cumque nemo alias autem possimus tenetur harum sapiente atque, laboriosam pariatur quidem aperiam. Dolore facilis recusandae accusamus atque odit ipsum est possimus molestias eos unde. Rem facere aliquid ut repudiandae, explicabo maiores, ipsum hic sequi quidem facilis unde quia ratione eligendi ullam consequatur. Ipsam consequuntur commodi, magnam tenetur eos dignissimos aut, facere neque hic reprehenderit cum, vel soluta culpa unde nostrum eaque quae consectetur ad. Id facilis perferendis temporibus et reiciendis non placeat sint totam quo, vitae earum at sequi voluptatibus repellat ea deleniti ad, magni nam quisquam ab modi? Dolores exercitationem magnam ratione pariatur esse fugiat consequuntur distinctio quo rerum ullam. Expedita ab nostrum ducimus. Harum sint earum eaque accusantium ut amet magnam vitae doloribus excepturi dolores possimus, ullam sit voluptates fugit. Assumenda quasi quos ullam illum rerum labore adipisci vitae incidunt? Voluptate, doloribus consectetur. Aperiam impedit dolor animi maxime exercitationem, facere tempora reiciendis pariatur quo ut obcaecati aliquid accusantium nisi, doloribus, iusto asperiores vel quibusdam dolorum! Minus, atque? Possimus non consequuntur nesciunt saepe est blanditiis exercitationem doloremque, corrupti ullam placeat deserunt nam perspiciatis temporibus aperiam. At in sed doloremque dolor a amet quas sint quibusdam nobis voluptatem. Incidunt natus consectetur laboriosam tempora nisi cumque similique inventore beatae tempore reiciendis a, corrupti, sit, sequi odio. Reprehenderit nobis ipsum illum ipsa alias beatae, magnam consequatur dolorem perferendis quidem ab commodi deserunt, expedita quaerat earum voluptates labore. Unde enim minus vel id illo in laborum perferendis aperiam dolore maxime temporibus cumque earum, molestiae laudantium fuga quia? Necessitatibus architecto obcaecati aut repellat nemo provident nostrum nobis pariatur qui quisquam consequuntur, omnis assumenda quam animi alias, delectus est odio recusandae accusamus neque eligendi, id totam! Debitis impedit quasi id unde harum excepturi non amet voluptatum incidunt asperiores atque accusantium optio necessitatibus animi corrupti, ex aperiam accusamus ab maxime perspiciatis, aut qui numquam, libero illum. Pariatur vitae, dignissimos vel error sequi modi corrupti quidem quod nulla minus. Iste, magnam. Exercitationem, magnam accusamus?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam ea fuga! Aliquid vitae enim, facilis tempora nisi omnis libero sunt illum minus iste aperiam porro, ea, similique aspernatur qui optio sit delectus commodi temporibus fugiat dolorum deleniti. Nulla voluptas officia nam sunt est autem, neque exercitationem earum magnam qui illo officiis molestiae laudantium ullam mollitia iste maiores libero quod eius assumenda ipsam fugit! Blanditiis, nemo labore! Cum aliquam consectetur ducimus quidem voluptate veritatis similique quam ex accusantium qui vero est illum, dolorem ipsam inventore modi quis maiores necessitatibus numquam! Quis corporis, placeat at explicabo cupiditate quo, optio eaque asperiores aliquid rerum praesentium unde ab aut iste adipisci fugiat. Fuga laborum ducimus natus fugit dolor! Pariatur, quibusdam ipsam odio molestias aspernatur iusto debitis soluta sunt voluptates deserunt eos maxime consequuntur cupiditate, minima quisquam perferendis? Nulla consequatur accusantium unde rerum dolorem impedit, magnam nobis facilis ea cum ipsum accusamus, modi provident neque dolorum laudantium dolores obcaecati necessitatibus sint iusto doloremque iure non, dolore veritatis? Reiciendis adipisci excepturi beatae exercitationem debitis voluptatum. Eaque sed quia dolore facere error iste dicta repudiandae incidunt quisquam ea cumque nemo alias autem possimus tenetur harum sapiente atque, laboriosam pariatur quidem aperiam. Dolore facilis recusandae accusamus atque odit ipsum est possimus molestias eos unde. Rem facere aliquid ut repudiandae, explicabo maiores, ipsum hic sequi quidem facilis unde quia ratione eligendi ullam consequatur. Ipsam consequuntur commodi, magnam tenetur eos dignissimos aut, facere neque hic reprehenderit cum, vel soluta culpa unde nostrum eaque quae consectetur ad. Id facilis perferendis temporibus et reiciendis non placeat sint totam quo, vitae earum at sequi voluptatibus repellat ea deleniti ad, magni nam quisquam ab modi? Dolores exercitationem magnam ratione pariatur esse fugiat consequuntur distinctio quo rerum ullam. Expedita ab nostrum ducimus. Harum sint earum eaque accusantium ut amet magnam vitae doloribus excepturi dolores possimus, ullam sit voluptates fugit. Assumenda quasi quos ullam illum rerum labore adipisci vitae incidunt? Voluptate, doloribus consectetur. Aperiam impedit dolor animi maxime exercitationem, facere tempora reiciendis pariatur quo ut obcaecati aliquid accusantium nisi, doloribus, iusto asperiores vel quibusdam dolorum! Minus, atque? Possimus non consequuntur nesciunt saepe est blanditiis exercitationem doloremque, corrupti ullam placeat deserunt nam perspiciatis temporibus aperiam. At in sed doloremque dolor a amet quas sint quibusdam nobis voluptatem. Incidunt natus consectetur laboriosam tempora nisi cumque similique inventore beatae tempore reiciendis a, corrupti, sit, sequi odio. Reprehenderit nobis ipsum illum ipsa alias beatae, magnam consequatur dolorem perferendis quidem ab commodi deserunt, expedita quaerat earum voluptates labore. Unde enim minus vel id illo in laborum perferendis aperiam dolore maxime temporibus cumque earum, molestiae laudantium fuga quia? Necessitatibus architecto obcaecati aut repellat nemo provident nostrum nobis pariatur qui quisquam consequuntur, omnis assumenda quam animi alias, delectus est odio recusandae accusamus neque eligendi, id totam! Debitis impedit quasi id unde harum excepturi non amet voluptatum incidunt asperiores atque accusantium optio necessitatibus animi corrupti, ex aperiam accusamus ab maxime perspiciatis, aut qui numquam, libero illum. Pariatur vitae, dignissimos vel error sequi modi corrupti quidem quod nulla minus. Iste, magnam. Exercitationem, magnam accusamus?</p>
    
    </div>
    
    </div>
    </>
  )
}

export default App
