import { useEffect, useState } from 'react';
import { getFileDownloadURL } from '../Firebase/Firebase';

const useFetchImageUrl = (commerce) => {
  const [imgURL, setImgURL] = useState('');

  useEffect(() => {
    const fetchImgURL = async () => {
      const fileName = commerce.id.toString();
      const url = await getFileDownloadURL(fileName);
      setImgURL(url);
    };
    return fetchImgURL;
  }, [commerce]);

  return imgURL;
};

export default useFetchImageUrl;
