import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaClockRotateLeft } from "react-icons/fa6";

import crane from '../imgs/crane.jpg'; 
import elephant from '../imgs/elephant.webp'; 
import gorilla from '../imgs/gorila.jpg'; 
import lion from '../imgs/lion.jpg'; 
import tourist from '../imgs/tourist.jpg'; 
import giraffe from '../imgs/giraffe.jpg'; 
import resort1 from '../imgs/resort1.jpg'; 
import buffalo from "../imgs/buffalo.jpg" ;
export default function SafariInfo()
{
    const images = [
        { id: 1, src: elephant },
        { id: 2, src: tourist },
        { id: 3, src: buffalo },
        { id: 4, src: lion },
        { id: 5, src: gorilla },
        { id: 6, src: giraffe },
        { id: 7, src: tourist },
        { id: 8, src: crane },
        { id: 9, src: resort1 },
        { id: 10, src: gorilla },
        // Add more images as needed
      ];
      
      const settings = {
        dots: true,
        infinite: true,
        speed: 2000, // Change image every 2 seconds
        slidesToShow: 5, // Display 5 images for laptop view
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 976, // Tablet view
            settings: {
              slidesToShow: 3, // Display 3 images for tablet view
            },
          },
          {
            breakpoint: 768, // Tablet view
            settings: {
              slidesToShow: 2, // Display 3 images for tablet view
            },
          },
          {
            breakpoint: 480, // Mobile view
            settings: {
              slidesToShow: 1, // Display 1 image for mobile view
            },
          },
        ],
      };
    return(
        <>
            {/* Gallery section */}
            <div className='mt-3 mb-3 h-96 justify-center' >
            <Slider {...settings}>
                {images.map((image) => (
                <div key={image.id} className='mt-14'>
                    <div className="w-64 h-64 flex justice group cursor-pointer">
                    <img
                        src={image.src}
                        alt="Your Image"
                        className="w-full h-full rounded-lg group-hover:opacity-75 transition-opacity duration-300"
                    />
                    
                    </div>
                </div>
                ))}
            </Slider>
            </div>

            {/* header section */}
            <section className='flex justify-around items-center bg-pink-100 h-52 flex-wrap'>
                <div className='font-bold md:text-2xl'>NAIROBI & MASAI MARA 4 NIGHTS, 5 DAYS PACKAGE</div>
                <div className='flex space-y-2 space-x-4'>
                    <div className='flex flex-col md:flex-row items-center space-x-2'>
                        <FaClockRotateLeft className='text-brightRed text-2xl'/>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-400 font-sm'>From</h1>
                            <h1 className='font-medium'>$2000.00</h1>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center space-x-2'>
                        <FaClockRotateLeft className='text-brightRed text-2xl'/>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-400 font-sm'>Duration</h1>
                            <h1 className='font-medium'>35 hours</h1>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center space-x-2'>
                        <FaClockRotateLeft className='text-brightRed text-2xl'/>
                        <div className='flex flex-col'>
                            <h1 className='text-gray-400 font-sm'>Tour Type</h1>
                            <h1 className='font-medium'>Cruises</h1>
                        </div>
                    </div>
                </div>
            </section>
            <div className='flex justify-end space-x-1 md:space-x-3 h-14 border border-b-2'>
                <button className='flex items-center bg-gray-200 rounded-sm p-2 md:px-6 my-2'>
                    <FaClockRotateLeft />
                    SHARE
                </button>
                <button className='flex items-center bg-gray-200 rounded-sm p-2 md:px-6 my-2'>
                    <FaClockRotateLeft />
                    REVIEWS
                </button>
                <button className='flex items-center bg-gray-200 rounded-sm p-2 md:px-6 my-2'>
                    <FaClockRotateLeft />
                    WISHLIST
                </button>
            </div>
            {/* overview section */}
            <section className='flex flex-col md:flex-row my-10 md:mx-28 xsm:mx-5 space-x-3'>
                    {/* left section */}
                    <div className='space-y-5'>
                        <div className='space-y-3'>
                        <h1 className='text-brightRed font-bold text-2xl'>Overview</h1>
                        <p>Our 3 Days Safari will take you to Uganda’s Largest National Park which is located in the northwestern part of the country covering an area of approx…
                         3,840sqkm. it was gazette as a National park and game reserve in 1926. The Park was named after the Murchison falls that flows along the Albert Nile River
                          which separates the park into two sections namely the southern and the northern sectors. It’s a habitat to over 550 species of birds and 76 species of mammals.

                            This trip starts from Entebbe or Kampala, our first stopover is at Ziwa Rhino Sanctuary- the only place in Uganda where you can see rhinos in the wilderness,
                             the Trek takes between 1.5 to 2.5 hours depending on far the rhinos have moved, you will have lunch at the sanctuary before heading to Murchison falls National Park,
                             one of the most interesting national parks that Uganda has to offer. The major activities done in the park include the game drives and the cruise to the bottom of the falls.

                            While in the park, game drives are done in the delta, Buligi Peninsular and at the heart of Murchison, several animals can be seen including elephants, buffalos, giraffes,
                             lions and leopards among other animals.

                            The 3-hour boat cruise to the bottom of the falls offers another opportunity to see these animals and they come to water especially on the sunny day, animals sighted on this 
                            cruise include Crocodiles, Hippos, Buffalos and so many bird species like the kingfishers, Hornbills, bee-eaters, Egyptian geese, and pelicans.

                            You visit to Murchison Falls National Park will crown with a visit to the top of the falls, Murchison falls are the world most powerful falls, where the wide river Nile waters squeezes in 8meter wide gorge, this is a scene you should never miss.

                            The Park can also be accessed by air. should you prefer to fly instead of driving. we are happy to assist you arrange for the flights.

                            For a more details and ideas on what else to do and to stay, please get in touch with us
                        </p>
                        </div>                        
                        <div className='space-y-2'>
                            <h1 className='font-bold text-xl underline'>Safari Highlights:</h1>
                            <ul className='list-disc pl-5 space-y-1'>
                                <li>Morning and evening Game drives in 4×4 Vehicles with open roof</li>
                                <li>Visit to the Ziwa Rhino Sanctuary for Rhino Tracking</li>
                                <li>Boat cruise to the Bottom of the falls</li>
                                <li>Optional Hike to the top of the falls</li>
                                <li>Optional Chimpanzee trekking in Budongo Forest</li>
                                <li>Optional Delta cruise to search for the rare Shoebill Stork</li>
                            </ul>
                        </div>
                        <div className='flex flex-col justify-between md:flex-row border border-t-0 border-r-0 border-l-0 pb-8'>
                            <div  className='space-y-2'>
                                <h1 className='text-brightRed font-bold text-xl'>Included</h1>
                                <div className='space-y-2'>
                                    <div className='flex item-center' >
                                        <FaClockRotateLeft />
                                        <h1>Pick and Drop Services</h1>
                                    </div>
                                    <div className='flex item-center' >
                                        <FaClockRotateLeft />
                                        <h1>1 Meal Per Day</h1>
                                    </div>
                                    <div className='flex item-center' >
                                        <FaClockRotateLeft />
                                        <h1>Cruise Dinner & Music Event</h1>
                                    </div>
                                    <div className='flex item-center' >
                                        <FaClockRotateLeft />
                                        <h1>Visit 7 Best Places in the City With Group</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-2' >
                                <h1 className='text-brightRed text-xl font-bold'>Excluded</h1>
                                    <div className='space-y-2'>
                                        <div className='flex'>
                                            <FaClockRotateLeft />
                                            <h1>Additional Services</h1>
                                        </div>
                                        <div className='flex'>
                                            <FaClockRotateLeft />
                                            <h1>Insurance</h1>
                                        </div>
                                        <div className='flex'>
                                            <FaClockRotateLeft />
                                            <h1>Food & Drinks</h1>
                                        </div>
                                        <div className='flex'>
                                            <FaClockRotateLeft />
                                            <h1>Tickets</h1>
                                        </div>
                                    </div>                                
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-xl font-bold text-brightRed'>Safaris Herinary</h1>
                            <div className='space-y-5'>
                                <details className='bg-purple-100 rounded-lg'>
                                    <summary className='font-bold md:text-xl py-3 pl-3'>Day 1: Arrival and trip around Nairobi</summary>
                                    <p>Arrival at Jomo Kenyatta International Airport in Nairobi. Transfer to Ole Sereni Hotel.
                                     Shopping and a trip around Nairobi City based on time of arrival.
                                     Transfer back to the hotel for Dinner and resting at Night.
                                    </p>
                                </details>
                                <details className='bg-purple-100 rounded-lg'>
                                    <summary className='font-bold md:text-xl py-3 pl-3'>Day 2: Visit to Nairobi Giraffe Centre and Karen Blixen museum</summary>
                                    <p>Pick up from the Hotel at 0800hrs after breakfast for Nairobi excursions with a visit to Nairobi Giraffe Centre and Karen
                                     Blixen museum. This is followed with Lunch at a nice Restaurant in the city. 
                                    After Lunch proceed to Kazuri beads for the afternoon, and then back to the hotel in the evening, rest and prepare for Dinner.
                                    </p>
                                </details>
                                <details className='bg-purple-100 rounded-lg'>
                                    <summary className='font-bold md:text-xl py-3 pl-3'>Day 3: Day at Zebra plains campi</summary>
                                    <p>0700hrs pickup from hotel for Masai Mara game reserve arriving in time for Lunch at Zebra plains camp.
                                     Lunch is followed with an afternoon game drive,
                                     after the game drive, return back for an overnight on a full board basis.
                                    </p>
                                </details>
                                <details className='bg-purple-100 rounded-lg'>
                                    <summary className='font-bold md:text-xl py-3 pl-3'>Day 4: Leisure at Mara Plains</summary>
                                    <p>Early morning breakfast. 0700hrs leave the hotel for a full day game drive having a full experience 
                                    of Mara Plains with a visit to the famous Mara river, Nature walks and interaction with the Mara Community.
                                     Return to the hotel at 5:00pm. You will have your lunch in the wild. 
                                    Relax and enjoy the comfort of the safari hotel and the nice view for the remaining part of the evening.
                                    </p>
                                </details>
                                <details className='bg-purple-100 rounded-lg'>
                                    <summary className='font-bold md:text-xl py-3 pl-3'>Day 5: Transfer to Kampala</summary>
                                    <p>Breakfast at the hotel at 0800hrs. Depart for Nairobi immediately after Lunch. Direct transfer back to the airport 
                                    or to the hotel depending on your time of departure from Kenya.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                    {/* right section */}
                    <div className='space-y-5 mt-4'>
                        <div className='md:w-72 flex flex-col border rounded-lg space-y-5 bg-pink-100 py-5'>
                            <div className=' pl-6 text-2xl font-bold text-brightRed border border-t-0 border-r-0 border-l-0 mx-6'>Book this Safari</div>
                            <div className='flex justify-between border border-t-0 border-r-0 border-l-0 mx-6'>From: <input type='date' /></div>
                            <div className='flex justify-between border border-t-0 border-r-0 border-l-0 mx-6'>Time: <input type='time' /></div>
                            <div className='flex flex-col border border-t-0 border-r-0 border-l-0 mx-6 space-y-2'>
                                <h1>Tickets:</h1>
                                <div className='flex justify-between'>Adults <input className='rounded-sm ' type='number' min={0} max={50}/></div>
                                <div className='flex justify-between'>Children <input className='rounded-sm ' type='number' min={0} max={50}/></div>
                            </div>
                            <div className='flex justify-between border border-t-0 border-r-0 border-l-0 mx-6'>
                                Total: <h1>$2000.00</h1>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button
                                    type='submit'
                                    className="md:p-4 xsm:p-3 xsm:px-5 md:px-8 font-bold text-white bg-brightRed rounded-xl baseline hover:shadow-2xl"
                                >
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                        <div className='md:w-72 flex flex-col border rounded-lg space-y-3 py-5'>
                            <div className=' pl-6 text-2xl font-bold text-brightRed'>Tour information</div>
                            <div className='flex flex-col pl-8 space-y-3  '>
                                <div className='flex items-center space-x-2'>
                                    <FaClockRotateLeft className='text-brightRed text-4xl'/>
                                    <div className='flex flex-col'>
                                        <h1 className='text-gray-400 font-sm'>Max Guests</h1>
                                        <h1 className='font-medium'>50</h1>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <FaClockRotateLeft className='text-brightRed text-4xl'/>
                                    <div className='flex flex-col'>
                                        <h1 className='text-gray-400 font-sm'>Min Age</h1>
                                        <h1 className='font-medium'>12+</h1>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <FaClockRotateLeft className='text-brightRed text-4xl'/>
                                    <div className='flex flex-col'>
                                        <h1 className='text-gray-400 font-sm'>Tour location</h1>
                                        <h1 className='font-medium'>East Africa</h1>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <FaClockRotateLeft className='text-brightRed text-4xl'/>
                                    <div className='flex flex-col'>
                                        <h1 className='text-gray-400 font-sm'>Languages Support</h1>
                                        <h1 className='font-medium'>German,English</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

        </>
    )
}