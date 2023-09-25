import { SiVoipdotms } from "react-icons/si";

export default async function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-4 p-4">
      <h1 className="text-center text-2xl font-medium dark:text-sky-600 pb-4">About us</h1>

      <div className="pb-4">
        <div className="flex items-center gap-2">
          <SiVoipdotms className="text-sky-300" />
          <h2 className="text-lg font-medium dark:text-sky-600 mb-2">
            Our story
          </h2>
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          dicta aut porro, culpa amet facilis possimus debitis quae tenetur
          ratione ex eius dolorum rem delectus laudantium earum voluptates
          placeat ullam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          dicta aut porro, culpa amet facilis possimus debitis quae tenetur
          ratione ex eius dolorum rem delectus laudantium earum voluptates
          placeat ullam.
        </p>
      </div>

      <div className="pb-4">
        <div className="flex items-center gap-2">
          <SiVoipdotms className="text-sky-300" />
          <h2 className="text-lg font-medium dark:text-sky-600 mb-2">
            How we operate
          </h2>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem
          autem, assumenda totam aperiam libero beatae pariatur corrupti sequi.
          Unde fuga nisi dolor inventore adipisci. Eius, perspiciatis. Pariatur,
          deleniti quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          dicta aut porro, culpa amet facilis possimus debitis quae tenetur
          ratione ex eius dolorum rem delectus laudantium earum voluptates
          placeat ullam.
        </p>
      </div>

      <div className="pb-4">
        <div className="flex items-center gap-2">
          <SiVoipdotms className="text-sky-300" />
          <h2 className="text-lg font-medium dark:text-sky-600 mb-2">
            Our mission
          </h2>
        </div>

        <p>
          Ut, iusto! Exercitationem similique veniam magnam esse dignissimos
          neque natus placeat maxime quos autem? Et quaerat quasi provident non,
          inventore illum placeat? Nemo saepe non alias animi quae temporibus,
          officiis itaque omnis consequuntur esse perferendis iusto doloremque
          mollitia aliquid? Sed ab repellat alias cumque! Reiciendis, accusamus
          atque minima voluptatum odit esse voluptas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          facilis, totam eligendi repellendus tenetur quis saepe sapiente? Quos
          eos nostrum, voluptatem optio suscipit provident quaerat beatae
          veritatis, ea possimus est.
        </p>
      </div>
    </div>
  );
}
