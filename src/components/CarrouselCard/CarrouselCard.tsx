import { RiShareBoxLine } from "react-icons/ri";
import Carrousel from "../Carrousel/Carrousel";
import { styles } from "./styles";
import { useRouter } from "next/navigation";

interface ICarrouselCard {
  name: string;
  imagesArray: string[];
  projectDetailsText?: string;
}

export default function CarrouselCard({
  name,
  imagesArray,
  projectDetailsText,
}: ICarrouselCard) {
  const router = useRouter();
  return (
    <div className={styles.Container}>
      <Carrousel imagesArray={imagesArray} />
      <button
        className={styles.DescContainer}
        onClick={() =>
          router.push(
            `/ProjectDetails?title=${name}&projectDesc=${projectDetailsText}`
          )
        }
      >
        <div className="flex flex-col">
          <text
            className={`text-[9px] font-strong font-bold text-secundary-graySeven`}
          >
            CLIQUE PARA VER DETALHES
          </text>
          <text className="text-[16px] text-white">{name}</text>
        </div>
        <RiShareBoxLine color="white" />
      </button>
    </div>
  );
}
