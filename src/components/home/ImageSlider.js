import React, { useState } from "react";
import '../../asset/css/home/ImageSlider.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ImageDate from '../../asset/api/imageData.json';

const ImageSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(2);

  const radio = ImageDate.map(({ url }, index) => (
    <span className={"dot"} onClick={() => {
      setSliderIndex(index)
    }
    }
      className={sliderIndex === index ? "dot active" : "dot"}
    ></span>
  ));

  return (
    <div className={'full-body'}>
      <div className={'slider'}>
        <button
          disabled={sliderIndex === 0}
          style={sliderIndex === 0 ? { visibility: 'hidden' } : { color: 'rgb(116, 0, 0)' }}
          onClick={() => {
            setSliderIndex(sliderIndex - 1);
          }}
        >
          <NavigateNextIcon style={{ fontSize: 100 }} />
        </button>
        <div>
          <img src={ImageDate[sliderIndex].url} />
          <div>
            {radio}
          </div>
        </div>
        <button
          disabled={sliderIndex === ImageDate.length - 1}
          style={sliderIndex === ImageDate.length - 1 ? { visibility: 'hidden' } : { color: 'rgb(116, 0, 0)' }}
          onClick={() => {
            setSliderIndex(sliderIndex + 1);
          }}
        >
          <NavigateNextIcon style={{ fontSize: 100, transform: "scaleX(-1)" }} />
        </button>
        <div >
        </div>
      </div>
    </div>

  );
};

export default ImageSlider;