import { Label, Radio } from "flowbite-react";

function RadioInputField(props) {
  return (
    <div className="min-w-full relative mb-5">
      <h1 className="absolute -top-5 left-16 lg:left-5 z-50 text-lg text-center font-bold tracking-tight text-white bg-[#ea1d23] px-4 py-1 rounded-full shadow-lg min-w-60">
        {props.title}
      </h1>
      <div className="flex flex-col gap-2 justify-center w-full border-[1px] rounded-xl px-5 pt-10 pb-2">
        <p className="font-normal italic text-gray-700">{props.desc}</p>

        <div className="flex flex-col gap-2">
          {props.listOfArray.map((item, index) => (
            <div>
              <div key={index} className="flex items-center gap-2">
                <Radio
                  id={item}
                  name={props.title}
                  value={item}
                  onChange={props.onChangeInput}
                  required
                />
                <Label htmlFor={item} className="font-normal text-gray-700">
                  {item}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RadioInputField;
