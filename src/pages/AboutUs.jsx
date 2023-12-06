import resort1 from '../imgs/kidepo.jpg';
export default function AboutUs()
{
    const parentDivStyle = {
        backgroundImage: `url(${resort1})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '40vh', 
        display: 'flex',
        paddingRight: '60%',
        alignItems: 'center',
    };
    
      return (
        <>
            <div style={parentDivStyle} className="relative">
                <div className="text-white text-center mx-auto p-8">
                    <h1 className="text-4xl font-bold mb-4">About</h1>
                </div>
                <div className="hidden sm:block absolute right-20 bottom-0 p-4 text-black bg-white rounded-t-lg font-bold">
                    Home / <span className='text-brightRed'>About</span>
                </div>
            </div>
            <section className='space-y-9 items-center mt-10 mb-10'>
                <div className='flex flex-col items-center justify-center space-y-3 lg:ml-48 lg:mr-48 xsm:ml-7 xsm:mr-7'>
                    <div className='text-brightRed'>Learn About us</div>
                    <div className='font-bold text-3xl'>Explore with Viva Quest</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nesciunt deleniti vitae, recusandae dolorum libero quae mollitia eaque, suscipit blanditiis quo inventore aut veritatis earum eligendi a ex asperiores nam commodi. Quae vitae quasi dolores dolorem deleniti ipsa quas et dignissimos aperiam eaque! Tempora enim quas fugiat, veniam ab earum. Facilis consequatur iusto ab fuga culpa. Esse maiores dolores commodi sunt, nesciunt non sed sequi vitae, blanditiis corrupti eos. 
                    Fugit perspiciatis excepturi ab odio animi. Ad eligendi cum maxime quos?</div>
                    <img className='relative rounded-xl w-full lg:w-3/5 lg:h-auto lg:my-2 md:mb-3 md:w-2/5 md:h-64 sm:h-auto sm:w-9/12 sm:mb-3 xsm:mb-3 xsm:h-auto xsm:w-80' src={resort1} alt='picture here' />    
                </div>
                <div className='space-y-3 lg:ml-28 lg:mr-28 xsm:ml-7 xsm:mr-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et nesciunt deleniti vitae, recusandae dolorum libero quae mollitia eaque, suscipit blanditiis quo inventore aut veritatis earum eligendi a ex asperiores nam commodi. Quae vitae quasi dolores dolorem deleniti ipsa quas et dignissimos aperiam eaque! Tempora enim quas fugiat, veniam ab earum. Facilis consequatur iusto ab fuga culpa. Esse maiores dolores commodi sunt, nesciunt non sed sequi vitae, blanditiis corrupti eos. 
                    Fugit perspiciatis excepturi ab odio animi. Ad eligendi cum maxime quos?</div>
                <div className='space-y-3 lg:ml-28 lg:mr-28 xsm:ml-7 xsm:mr-7'>
                    <div className='flex justify-start font-bold' >Viva Quest inspiration by Kayondo</div> 
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in quos rerum similique dolorem aut, tempore iste labore accusantium tempora veritatis sit corporis deserunt at voluptas enim sed eos fuga suscipit. Consequatur facilis in quaerat culpa odio eos voluptates, amet, dicta fugiat reprehenderit, delectus ex! Officiis quod non ea inventore, natus magnam veniam provident a voluptatem quis sit beatae officia nesciunt aperiam saepe pariatur architecto? Accusantium similique neque 
                        harum eligendi? Error fuga dignissimos eum a, eos nesciunt ducimus vel. Molestiae amet, dolore rem, voluptates sed hic esse quibusdam quae minus aut, a eveniet nemo tenetur? Corrupti libero dolore accusamus velit iure assumenda voluptate dolor, magnam et quaerat quibusdam? Molestiae, facere! Obcaecati veniam minima illo sunt dolore voluptatem amet cum atque unde est? Eius, iste expedita. Ratione, fuga ea. Quasi at laborum, sed alias aperiam eveniet ex? Aut delectus expedita ipsum neque,
                        assumenda cumque recusandae unde molestias placeat id quam reprehenderit! Error eaque assumenda voluptates explicabo in saepe nemo cupiditate a, veniam repellendus perferendis, magnam repellat amet? Nam, similique perferendis assumenda sequi illum dolorem non neque vel, maiores at quas aliquid impedit aliquam id cumque ut labore vitae debitis ratione repellendus aperiam? Maiores, perspiciatis neque perferendis nostrum nesciunt laborum nemo, ullam voluptate, saepe temporibus aut quis quasi? 
                        Unde eveniet illum, quam reiciendis quod suscipit beatae labore iste 
                        obcaecati ipsa minus alias, corrupti culpa quaerat maxime! Ipsa non nam nobis possimus at qui explicabo aperiam quaerat tenetur sint dolore, laudantium nostrum! Modi expedita quaerat debitis, aspernatur necessitatibus inventore. Consectetur iste natus fugit reiciendis, amet molestias, dolorem cum repellendus, rerum totam consequuntur error expedita cupiditate autem facere ea! Mollitia nihil amet similique nemo repellat facilis dolores odio perspiciatis, distinctio dignissimos nam vero quasi,
                         optio placeat quisquam accusamus id rerum ab debitis minima iste odit? Et, officiis in! Eius id nam magnam commodi. (Too be published soon)
                    </div>
                </div>
                <div className='space-y-3 lg:ml-28 lg:mr-28 xsm:ml-7 xsm:mr-7'>
                    <div className='flex justify-start font-bold' >Viva Quest Mission</div> 
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in quos rerum similique dolorem aut, tempore iste labore accusantium tempora veritatis sit corporis deserunt at voluptas enim sed eos fuga suscipit. Consequatur facilis in quaerat culpa odio eos voluptates, amet, dicta fugiat reprehenderit, delectus ex! Officiis quod non ea inventore, natus magnam veniam provident a voluptatem quis sit beatae officia nesciunt aperiam saepe pariatur architecto? Accusantium similique neque 
                    </div>
                </div>
                <div className='space-y-3 lg:ml-28 lg:mr-28 xsm:ml-7 xsm:mr-7'>
                    <div className='flex justify-start font-bold' >Emergency of Viva Quest</div> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum, excepturi tempore ea sit vitae eaque minus iste rem nihil  Distinctio laborum, excepturi tempore ea sit vitae eaque minus iste rem nihil!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum, excepturi tempore ea sit vitae eaque minus iste rem nihil  Distinctio laborum, excepturi tempore ea sit vitae eaque minus iste rem nihil!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum, excepturi tempore ea sit vitae eaque minus iste rem nihil  Distinctio laborum, excepturi tempore ea sit vitae eaque minus iste rem nihil!</p>
                </div>
            </section>
            {/* book us now section */}
            <section className=' flex h-72 bg-brightRed mt-10'>
                <div className="container flex text-white flex-col justify-between lg:flex-row items-center px-6 mx-auto mb-8 space-y-0 xsm:space-y-3 ">
                    
                    <div className="">
                        <p>Plan your trip with us</p>
                        <p className='text-4xl font-bold'>Ready for an unforgatable tour?</p>
                    </div>

                    
                    <div className="flex justify-center md:justify-start">
                        <a href="booking" 
                        className="p-3 px-6 pt-2 text-white bg-veryDarkBlue rounded-xl baseline hover:bg-slate-800 " >
                        BOOK TOUR NOW</a>
                    </div>
                    
                    
                </div>
            </section> 
            
        </>
      );
}
