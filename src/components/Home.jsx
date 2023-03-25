import home from './public/home.jpg'
export default function Home () {
	return (
		<div className='flex justify-center min-h-screen'>
			<div className='flex gap-10 px-32'>
				<img className='h-[58%] w-[50%] rounded-xl object-cover' src={home} alt='home img' />
				<div className='flex flex-col gap-5'>
					<p className='font-bold text-8xl'>REPUBLICA DOMINICANA</p>
					<p className='text-2xl font-medium text-justify opacity-80'>Es un país del Caribe que comparte la isla La Española con Haití al oeste. Es conocida por sus playas, centros turísticos y áreas de golf. Su terreno incluye bosques tropicales, sabana y tierras altas, incluida Pico Duarte, la montaña más alta del Caribe. La capital Santo Domingo tiene elementos de estilo español, como la Catedral Primada de América de estilo gótico, que tiene 5 siglos de antigüedad, en su distrito Zona Colonial. </p>
				</div>
			</div>
		</div>
	)
}
