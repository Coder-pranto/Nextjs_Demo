import Image from 'next/image';
import sampleImage from '@/public/images/spiderman.jpg';
import ImageUpload from '@/components/ImageUpload';

export default function Home() {
  return (
    <main className='text-xl mt-10'>
      <div className='mb-6'>
        <Image
          src={sampleImage}
          alt='Sample Image'
          width={800} // Adjust the width and height as needed
          height={450}
          placeholder='blur' // Enables the blur placeholder
          className='rounded-lg shadow-lg'
        />
      </div>
      <p className='text-justify'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        commodi voluptates amet illum optio saepe debitis, ab ratione vel! Nihil
        error ex delectus eligendi omnis quas veritatis adipisci deserunt
        tempore velit id, tempora exercitationem, quo esse ut hic nisi officiis
        ea laborum repellat? Dolor iure sit aliquam omnis, optio a dolore nam
        autem nostrum? Eius animi nemo excepturi asperiores voluptates? Veniam
        reiciendis quam eum hic molestias quia doloremque expedita optio
        pariatur, incidunt quibusdam dolorem ratione at non ullam recusandae
        animi qui ex necessitatibus odit, blanditiis consequatur velit esse
        error? Magni ullam error architecto esse impedit ipsum molestiae libero
        expedita praesentium.
      </p>

      <ImageUpload/>

    </main>
  );
}



