import svgPaths from "./svg-zvaef81422";

function Heading() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">Student Portal</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[-2px] w-[133px]">Welcome, John Smith</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[52px] relative shrink-0 w-[156.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p38966ca0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14ca9100} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 10H7.5" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.688px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[54.5px] text-[#4a5565] text-[16px] text-center top-[-2px] whitespace-nowrap">Logout</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Container1 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col h-[84px] items-start left-0 px-[192px] top-0 w-[1664px]" data-name="Header">
      <Container />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[58px] relative shrink-0 w-[118.125px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[73px] text-[#155dfc] text-[16px] text-center top-[14px] whitespace-nowrap">My Profile</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3298)" id="Icon">
          <path d={svgPaths.p360f8100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_3298">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[58px] relative shrink-0 w-[198.844px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[113px] text-[#4a5565] text-[16px] text-center top-[14px] whitespace-nowrap">AI Recommendations</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p9034a80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 4.80333V17.3033" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.69667V15.1967" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[58px] relative shrink-0 w-[171.344px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[100.5px] text-[#4a5565] text-[16px] text-center top-[14px] whitespace-nowrap">Career Roadmaps</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pc663880} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[58px] relative shrink-0 w-[77.391px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[53px] text-[#4a5565] text-[16px] text-center top-[14px] whitespace-nowrap">Chat</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 5.83333V17.5" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25713000} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[58px] relative shrink-0 w-[116.531px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon5 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[72.5px] text-[#4a5565] text-[16px] text-center top-[14px] whitespace-nowrap">Resources</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[32px] h-[58px] items-start relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[59px] items-start left-0 pb-px px-[208px] top-[84px] w-[1664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[80px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(194, 122, 255) 0%, rgb(230, 0, 118) 100%)" }} data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] text-white whitespace-nowrap">J</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-w-px relative text-[#0a0a0a] text-[24px]">John Smith</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#4a5565] text-[16px] top-[-2px] whitespace-nowrap">john.s@student.com</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[56px] relative shrink-0 w-[144.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#364153] text-[14px]">CGPA</p>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Number Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">3.7</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[70px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <NumberInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#364153] text-[14px]">Major</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Computer Science</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[70px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <TextInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#364153] text-[14px]">Skills</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[24px] left-[59.42px] top-[4px] w-[11.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[6px] text-[#2b7fff] text-[16px] text-center top-[-2px] whitespace-nowrap">×</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[#dbeafe] h-[32px] left-0 rounded-[33554400px] top-0 w-[82.531px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#1447e6] text-[14px] top-[4px] whitespace-nowrap">Python</p>
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[24px] left-[77.09px] top-[4px] w-[11.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[6px] text-[#2b7fff] text-[16px] text-center top-[-2px] whitespace-nowrap">×</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[#dbeafe] h-[32px] left-[90.53px] rounded-[33554400px] top-0 w-[100.203px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#1447e6] text-[14px] top-[4px] whitespace-nowrap">JavaScript</p>
      <Button7 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[24px] left-[49.63px] top-[4px] w-[11.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[6px] text-[#2b7fff] text-[16px] text-center top-[-2px] whitespace-nowrap">×</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[#dbeafe] h-[32px] left-[198.73px] rounded-[33554400px] top-0 w-[72.734px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#1447e6] text-[14px] top-[4px] whitespace-nowrap">React</p>
      <Button8 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute h-[24px] left-[125.94px] top-[4px] w-[11.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[6px] text-[#2b7fff] text-[16px] text-center top-[-2px] whitespace-nowrap">×</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[#dbeafe] h-[32px] left-[279.47px] rounded-[33554400px] top-0 w-[149.047px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#1447e6] text-[14px] top-[4px] whitespace-nowrap">Machine Learning</p>
      <Button9 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Add a skill and press Enter</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[110px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container13 />
      <TextInput1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#364153] text-[14px]">Interests</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute h-[24px] left-[28.77px] top-[4px] w-[11.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[6px] text-[#ad46ff] text-[16px] text-center top-[-2px] whitespace-nowrap">×</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[#f3e8ff] h-[32px] left-0 rounded-[33554400px] top-0 w-[51.875px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#8200db] text-[14px] top-[4px] whitespace-nowrap">AI</p>
      <Button10 />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute h-[24px] left-[130.95px] top-[4px] w-[11.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[6px] text-[#ad46ff] text-[16px] text-center top-[-2px] whitespace-nowrap">×</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#f3e8ff] h-[32px] left-[59.88px] rounded-[33554400px] top-0 w-[154.063px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#8200db] text-[14px] top-[4px] whitespace-nowrap">Web Development</p>
      <Button11 />
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute h-[24px] left-[94.97px] top-[4px] w-[11.109px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[6px] text-[#ad46ff] text-[16px] text-center top-[-2px] whitespace-nowrap">×</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#f3e8ff] h-[32px] left-[221.94px] rounded-[33554400px] top-0 w-[118.078px]" data-name="Text">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#8200db] text-[14px] top-[4px] whitespace-nowrap">Data Science</p>
      <Button12 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Text5 />
      <Text6 />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="h-[42px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(10,10,10,0.5)] whitespace-nowrap">Add an interest and press Enter</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[110px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container15 />
      <TextInput2 />
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#155dfc] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[352.13px] text-[16px] text-center text-white top-[10px] whitespace-nowrap">Save Profile</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[504px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
      <Container12 />
      <Container14 />
      <Button13 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[680px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[32px] px-[32px] relative size-full">
        <Container6 />
        <Container9 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[20px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2f84f400} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <Icon6 />
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-[28px] text-[#0a0a0a] text-[20px] top-[-3px] whitespace-nowrap">Saved Career Paths</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-[-2px] whitespace-nowrap">Software Engineer</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#4a5565] text-[14px]">Engineering</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[78px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-[-2px] whitespace-nowrap">AI/ML Engineer</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#4a5565] text-[14px]">Engineering</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[78px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[276px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[32px] px-[32px] relative size-full">
        <Heading2 />
        <Container17 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[980px] items-start left-[448px] top-[175px] w-[768px]" data-name="Container">
      <Container5 />
      <Container16 />
    </div>
  );
}

function StudentDashboard() {
  return (
    <div className="bg-[#f9fafb] h-[1187px] relative shrink-0 w-full" data-name="StudentDashboard">
      <Header />
      <Container2 />
      <Container4 />
    </div>
  );
}

export default function MyProfile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="my profile">
      <StudentDashboard />
    </div>
  );
}