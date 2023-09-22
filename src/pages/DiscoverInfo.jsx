import resort1 from '../imgs/resort1.jpg'
import lion from '../imgs/lion.jpg'
import { FaClockRotateLeft } from "react-icons/fa6";
export default function DiscoverInfo()
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
            {/* Location section */}
            <div style={parentDivStyle} className="relative">
                <div className="hidden sm:block absolute right-20 bottom-0 p-4 text-black bg-white rounded-t-lg font-bold">
                    Home / <span className='text-brightRed'>Lifestyle</span>
                </div>
            </div>
            {/* overview section */}
            <section className='flex flex-col md:flex-row my-10 md:mx-28 xsm:mx-5 space-x-3'>
                    {/* left section */}
                    <div className='space-y-5'>
                        <div>
                            <img src={lion}/>
                            <div className='flex space-x-8 mt-3'>
                                <div className='flex items-center space-x-1'><FaClockRotateLeft className='text-brightRed'/> <h1>Kayondo Abdulatif</h1></div>
                                <div className='flex items-center space-x-1'><FaClockRotateLeft className='text-brightRed'/><h1>Lifestyle, Nature</h1></div>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='font-bold text-2xl'>A Closer Look at the Kings of the Wild</h1>
                            <p>Lions are large, carnivorous mammals that belong to the Felidae family and are commonly known as
                             the “king of the jungle” due to their majestic appearance and dominance in their habitats. Here are some key
                              facts about lions:
                                Habitat: Lions are primarily found in parts of Africa. They inhabit various types of ecosystems, including savannas, grasslands, and open
                                woodlands.

                                Physical Characteristics: Lions are distinctive with their tawny fur, tufted tail, and the males’ prominent manes, which can vary in color
                                from blond to black. Manes are used as a secondary sexual characteristic, indicating a lion’s age, health, and dominance.

                                Social Structure: Lions are the only social cats, usually living in groups called prides. A pride typically consists of related adult females, their cubs, and a small number of adult males. The females usually do the majority of the hunting, while the males protect the pride and its territory.

                                Diet: Lions are apex predators and are known for their hunting prowess. They primarily prey on large herbivores such as wildebeest, zebras, and buffalo. Lions use teamwork to bring down their prey, relying on their strength and cooperative hunting strategies.

                                Communication: Lions communicate using a variety of vocalizations, including roars, grunts, and purrs. Roaring is particularly important for males to establish their territory and communicate with other prides.

                                Cultural Significance: Lions have held symbolic and cultural significance for humans for centuries. They appear in various cultures’ mythology, art, and literature as symbols of strength, courage, and nobility.

                                The life expectancy: Life expectancy of a lion in the wild is typically around 10 to 14 years. In captivity, lions may live a bit longer, often reaching up to 20 years or more. However, various factors can influence their lifespan, including the availability of food, territory, competition with other predators, disease, and human activities such as hunting or habitat destruction. It’s important to note that these are average estimates and individual lions’ lifespans can vary.

                                Interesting Fact: Lions are the only cats that live in groups. Their social structure contributes to their hunting success and survival in the wild.

                                The gestation period: For lions, the gestation period is approximately 110 to 120 days, or around 3 and a half to 4 months. Female lions typically give birth to a litter of one to four cubs, although two or three cubs are more common. The cubs are born blind and helpless, and they rely on their mother for nourishment and protection during their early stages of life. The lioness will usually find a secluded and safe den for giving birth and raising her cubs until they are old enough to join the pride.

                            </p>                  
                        </div>                        
                        
                    </div>
                    {/* right section */}
                    <div className='space-y-5 mt-4'>
                        <div className='md:w-72 flex flex-col border rounded-lg space-y-3 py-5'>
                            <div className=' pl-6 text-2xl font-bold '>Recent Posts</div>
                            <div className='flex flex-col pl-8 space-y-10  '>
                                <div className='flex items-center space-x-2'>
                                    <img className='rounded-md h-16 w-16'  src={resort1}/>
                                    <div className='flex flex-col'>
                                        <h1 className='font-sm font-bold'>THE BACHWEZI</h1>
                                        <h1 className='font-xs text-gray-400'>By Kayondo Abdulatif</h1>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <img className='rounded-md h-16 w-16'  src={resort1}/>
                                    <div className='flex flex-col'>
                                        <h1 className='font-sm font-bold'>THE BACHWEZI</h1>
                                        <h1 className='font-xs text-gray-400'>By Kayondo Abdulatif</h1>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <img className='rounded-md h-16 w-16'  src={resort1}/>
                                    <div className='flex flex-col'>
                                        <h1 className='font-sm font-bold'>THE BACHWEZI</h1>
                                        <h1 className='font-xs text-gray-400'>By Kayondo Abdulatif</h1>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <img className='rounded-md h-16 w-16'  src={resort1}/>
                                    <div className='flex flex-col'>
                                        <h1 className='font-sm font-bold'>THE BACHWEZI</h1>
                                        <h1 className='font-xs text-gray-400'>By Kayondo Abdulatif</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}