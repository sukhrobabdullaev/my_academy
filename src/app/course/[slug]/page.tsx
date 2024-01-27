import { Button } from "@/components/ui/button";
import { reactVideos } from "@/data";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "500"] });

interface Props {
  params: {
    slug: string;
  };
}

const CourseDetails = ({ params: { slug } }: Props) => {
  return (
    <div className="lg:ml-64 md:ml-20 sm:ml-24 md:p-10 sm:p-5">
      <div
        className={`${quicksand.className}  p-4 bg-zinc-50 dark:bg-zinc-900 sm:flex sm:items-center sm:justify-around rounded-md`}
      >
        <div className="basis-1/2">
          <h1 className="lg:text-[30px] md:text-[24px] sm:text-[20px] text-[26px] mb-3">
            <span className="text-[#3bc43f] font-bold">ReactJS</span> - to'liq
            kurs
          </h1>
          <p className="text-sm lg:text-lg sm:text-base text-[18px] leading-7">
            Hozirda mashhur JavaScript frameworklaridan biri ReactJSni to'liq
            o'rganing. ReactJS darslari to'liq kurs o'zbek tilida. ReactJS
            amaliyot va loyihalar
          </p>
          <div className="flex items-center gap-3 mt-3">
            <div>
              <span className="text-[#3bc43f]">Davomiylik: </span>
              <span>10 soat 34 daqiqa</span>
            </div>
            <div>
              <span className="text-[#3bc43f]">Darslar soni: </span>
              <span>40 ta</span>
            </div>
          </div>
        </div>
        <div className="relative sm:w-64 sm:h-64">
          <Image src="/courses/react.png" fill priority alt="react-icon" />
        </div>
      </div>
      <div className="flex justify-between items-center  mt-4">
        <div className="w-1/2 line-clamp-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          deserunt minus consequatur, placeat cum, sint eum nesciunt totam
          doloremque exercitationem aliquam saepe repellendus corrupti
          cupiditate soluta suscipit eaque dignissimos nihil! Enim
          necessitatibus porro a sint tenetur ipsam consequatur iure modi at
          libero repellat, delectus dolores quia explicabo corporis, omnis
          optio! Eveniet soluta, dicta aliquam ipsam illum sunt recusandae
          laborum dolorem nemo beatae, magnam aliquid totam harum modi odit amet
          maiores et, assumenda fugit pariatur repellat necessitatibus
          temporibus! Sed consectetur deleniti at quaerat molestiae tempora
          dolor amet tempore, odio odit iusto rem fugit quae reiciendis iure
          culpa asperiores quod qui placeat aliquid, non aliquam laboriosam
          exercitationem harum? Quae repudiandae eum sit eos mollitia, suscipit,
          architecto asperiores maiores accusantium expedita corrupti porro
          exercitationem temporibus maxime explicabo veniam, commodi aspernatur
          cum vel dolor laboriosam. Ipsam aperiam consequatur eum rerum sit
          corrupti minima debitis nulla molestiae hic iste ipsum itaque fuga
          numquam doloribus minus inventore natus, neque porro soluta! Magnam
          pariatur sit impedit praesentium quasi soluta itaque provident dolorum
          nemo dolor! Dolores modi tenetur architecto suscipit aliquid
          accusantium quaerat. Temporibus maiores, perferendis quasi est iusto
          debitis corrupti voluptatibus hic adipisci necessitatibus dicta non
          facere praesentium repellat tempora laborum molestiae consectetur
          delectus beatae in ducimus eaque ut. Fugit accusantium itaque autem
          saepe hic voluptatem ducimus sunt animi eligendi laudantium ullam, ea
          sequi eum cum optio ut iure, a blanditiis quibusdam sapiente natus
          quaerat soluta? Fugit at nemo sapiente cumque impedit. Et animi sed
          aperiam odit debitis molestias corporis dolores iste error provident
          ex dicta, laborum asperiores laudantium quisquam facere earum saepe
          ratione rem ad neque ullam. Non, voluptas tenetur alias, deleniti
          nulla tempore adipisci ipsa maxime numquam animi officia nisi enim
          consequuntur, veritatis vel repudiandae. Odit eaque libero cum dolorum
          obcaecati autem quibusdam aut cumque architecto accusantium quo
          aliquid, itaque, delectus nulla ut. Nemo atque itaque corporis ut
          alias eveniet nulla enim possimus commodi sint, magni odio quis non
          placeat expedita assumenda nobis? Deleniti, asperiores? Sint
          consectetur dicta placeat doloribus a repellat debitis officia sequi,
          tempora iste ipsam facilis repudiandae soluta sapiente fugiat eum
          ipsum! Sapiente iste, laudantium, aut quis quaerat aliquam
          reprehenderit impedit esse maiores pariatur quae sit, similique
          architecto nobis. Natus, dignissimos repudiandae velit nulla vel
          dolore doloremque tempore sequi autem. Quasi in, eius iure officia
          provident animi doloremque ullam porro sunt distinctio maiores, fuga
          repellendus quod deserunt et saepe eligendi id hic eum delectus. Totam
          porro itaque, atque nesciunt tenetur suscipit ut excepturi eius. Omnis
          nemo aperiam odit beatae autem, ipsam nihil error veritatis dolorum
          soluta quos architecto, amet optio eveniet nobis est sunt aliquid
          consequuntur, at ratione quis dolores reiciendis harum nam? Eaque
          aliquid autem repudiandae fuga eius accusamus doloremque illo natus
          in, minima quia nobis ipsum! Dolores vitae cum dolore, esse
          consequuntur expedita libero neque a quibusdam quisquam voluptate hic
          voluptates quod, voluptatum temporibus quos voluptas at debitis
          aperiam accusamus excepturi consequatur? Iste molestias consequuntur
          ratione obcaecati saepe enim aliquam, tempore ullam atque qui facilis
          officiis totam impedit soluta repellat consequatur ad itaque veniam
          inventore. Perferendis voluptate vero nobis reprehenderit corporis
          voluptas doloribus nihil facilis, expedita, fuga id cumque assumenda
          maiores porro sunt voluptatibus. In eveniet sequi suscipit rerum enim
          ratione natus laboriosam cumque debitis, quod hic culpa quia doloribus
          ipsam, molestiae dolores odit dolore perferendis illum maiores
          quibusdam quaerat earum necessitatibus! Deleniti, eligendi laborum
          adipisci possimus sequi quae ea totam corrupti, nobis, quisquam
          aliquam recusandae saepe cupiditate fugit deserunt itaque? Molestias
          neque totam, quae possimus id dolore est quasi alias quidem maiores
          dignissimos expedita omnis, ab harum. Quibusdam distinctio omnis
          recusandae inventore impedit, ratione corrupti enim dicta
          exercitationem eos maiores earum voluptatum tempora beatae explicabo
          in nemo doloribus nostrum est delectus vitae necessitatibus harum,
          sapiente animi? Voluptatibus alias dolorum, accusamus animi, quam,
          explicabo praesentium voluptatem error at est dolor voluptates ullam
          nam neque laudantium. Dicta corporis voluptatum consequuntur quod
          accusantium reprehenderit fuga aut at deserunt ducimus rem provident
          cum quos rerum suscipit sunt omnis iusto, veritatis voluptate? Autem
          voluptas eius eaque temporibus quasi totam dolor nihil sint, libero
          esse ea eveniet eos aliquid necessitatibus fugiat impedit maiores sit
          sunt explicabo nesciunt amet sed laudantium voluptatem! Tempore,
          aspernatur molestiae amet debitis hic voluptatibus sequi mollitia
          facilis quis veritatis neque sint odit eos, sapiente velit provident
          eveniet impedit repellat expedita. Asperiores recusandae, nihil nisi
          fugit atque ea tempore laborum a perspiciatis nam dolores quod quo
          quas, accusamus reprehenderit impedit possimus maxime. Et ipsam vitae
          mollitia nam eaque animi, esse iure commodi excepturi, amet laboriosam
          cupiditate! Et nulla quos minima laborum aliquam! Veritatis laboriosam
          iste molestiae eum facilis libero esse excepturi? Ipsa eius culpa
          maxime facere saepe illum iure at, excepturi libero quia corrupti
          adipisci minus, mollitia aliquid. Voluptatum deserunt quaerat
          voluptatem, in sunt ducimus ipsa quo nesciunt ipsam officia corrupti
          ullam debitis veniam officiis nulla animi delectus id. Inventore
          exercitationem cum repellat obcaecati doloremque possimus eaque ipsum,
          quos reprehenderit ex doloribus suscipit architecto modi ipsam
          repudiandae quaerat excepturi dicta nihil eum totam fuga accusamus
          consectetur quod dolor! Consequatur nulla ipsa harum, facilis sapiente
          atque libero minus expedita dolorem tenetur, voluptates incidunt totam
          ipsum saepe quibusdam molestias animi ex repellat perferendis
          repellendus architecto? Fuga, cumque voluptatem deserunt dignissimos
          ea sequi ab hic a nesciunt molestiae magnam debitis, tempore
          reiciendis officiis deleniti quisquam sunt in delectus. Non, deserunt
          architecto veritatis cupiditate nam consequatur pariatur quia
          reprehenderit placeat molestias! Aperiam, totam exercitationem. Nihil
          quidem unde temporibus expedita similique repudiandae ea consectetur
          consequatur nemo excepturi? Aliquam consequuntur officia, incidunt
          voluptatem, odit, nobis totam ut tenetur aut omnis cumque eius
          dolorem. Similique aspernatur reprehenderit vel vitae nostrum ipsum
          dignissimos, dicta commodi facilis eaque beatae magnam voluptate fugit
          qui eius error assumenda quasi eum. Pariatur maiores quidem odit
          incidunt sequi nam dolorum dolor tenetur corrupti! Fuga aut magnam
          dolore laboriosam nihil facere ullam, ducimus nam dolor eius! Iure
          cumque beatae voluptatem sequi excepturi quaerat voluptas magnam iusto
          ab temporibus. Distinctio, nostrum numquam voluptatum culpa excepturi
          perferendis illo nemo itaque eius placeat dolore iste? Possimus
          asperiores ab, deleniti aspernatur quos officia dolorem eveniet.
          Cumque aut similique perspiciatis fugiat eaque, beatae excepturi
          laborum explicabo natus architecto. Necessitatibus, odit voluptatem.
        </div>
        <Button asChild className="bg-[#3bc43f] hover:bg-[#3bc43f]">
          <Link href={`/course/${reactVideos[0].name}/dashboard`}>Kirish</Link>
        </Button>
      </div>
    </div>
  );
};

export default CourseDetails;
