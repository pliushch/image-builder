import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
  await imagemin(['images/*.{jpg,png}'], {
    destination: 'build/images',
    plugins: [
      imageminWebp({quality: 80})
    ]
  });
  await imagemin(['images/*.{jpg,png}'], {
    destination: 'build/images',
  });
  console.log('Images optimized');
})();
