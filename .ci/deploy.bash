# Script to install ffmpeg on netlify
rm -r ffmpeg
mkdir ffmpeg
echo "Getting ffmpeg"
wget -qP ffmpeg -O ffmpeg.tar.xz https://johnvansickle.com/ffmpeg/builds/ffmpeg-git-amd64-static.tar.xz
echo "Unpacking ffmpeg"
tar -xf ffmpeg.tar.xz -C ffmpeg --strip-components 1
echo "Set path"
PATH=$PATH:$(pwd)/ffmpeg
echo "Npm run build"
npm run build
