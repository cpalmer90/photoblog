import Image from "next/image";
import "../../globals.css";
import Rabbit from "public/DSC01024-ARW_DxO_DeepPRIME_050822.jpg";
import Deer from "public/DSC02747-ARW_DxO_DeepPRIME_050822.jpg";
import Kingfisher from "public/DSC05036-ARW_DxO_DeepPRIME.jpg";
import Seal from "public/DSC_0296-NEF_DxO_DeepPRIME.jpg";
import Bee from "public/DSC_0476-NEF_DxO_DeepPRIME.jpg";
export default function GalleryPreview() {
  return (
    <div id="container">
      <div className="item">
        <div className="content">
          <h2>Gallery</h2>
        </div>

        <div className="previews">
          <div className="preview-image">
            <Image src={Rabbit} alt={""} width={100} height={50} />
          </div>
          <div className="preview-image">
            <Image src={Deer} alt={""} width={100} height={50} />
          </div>
          <div className="preview-image">
            <Image src={Kingfisher} alt={""} width={100} height={50} />
          </div>
          <div className="preview-image">
            <Image src={Seal} alt={""} width={100} height={50} />
          </div>
          <div className="preview-image">
            <Image src={Bee} alt={""} width={100} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
