import svgPaths from "./svg-ulqpqjrcpm";

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
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[58px] relative shrink-0 w-[118.125px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[73px] text-[#4a5565] text-[16px] text-center top-[14px] whitespace-nowrap">My Profile</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_3486)" id="Icon">
          <path d={svgPaths.p360f8100} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_3486">
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
      <div aria-hidden="true" className="absolute border-[#155dfc] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[113px] text-[#155dfc] text-[16px] text-center top-[14px] whitespace-nowrap">AI Recommendations</p>
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

function Icon6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p858370} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 4V9.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M29.3333 6.66667H24" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M5.33333 22.6667V25.3333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M6.66667 24H4" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[386.703px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[36px] left-0 text-[30px] text-white top-[-3px] whitespace-nowrap">AI Career Recommendations</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[36px] items-center left-[32px] top-[32px] w-[832px]" data-name="Container">
      <Icon6 />
      <Heading1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[84px] w-[832px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#f3e8ff] text-[16px] top-[-2px] whitespace-nowrap">Our AI analyzes your academic details, skills, and interests to suggest the best career paths for you.</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white h-[48px] left-[32px] rounded-[10px] top-[132px] w-[269.391px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[135.5px] text-[#9810fa] text-[16px] text-center top-[10px] whitespace-nowrap">Generate Recommendations</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] h-[212px] relative rounded-[10px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(166.688deg, rgb(173, 70, 255) 0%, rgb(230, 0, 118) 100%)" }} data-name="Container">
      <Container6 />
      <Paragraph1 />
      <Button6 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[28px] min-w-px relative text-[#0a0a0a] text-[20px]">Recommended Careers for You</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[140.922px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#0a0a0a] text-[20px] whitespace-nowrap">AI/ML Engineer</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#dbeafe] h-[28px] relative rounded-[33554400px] shrink-0 w-[97.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1447e6] text-[14px] whitespace-nowrap">Engineering</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#dcfce7] h-[28px] relative rounded-[33554400px] shrink-0 w-[93.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#008236] text-[14px] top-[2px] w-[70px]">94% Match</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-0 top-0 w-[792px]" data-name="Container">
      <Heading3 />
      <Text />
      <Text1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-0 top-[36px] w-[792px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-2px] whitespace-nowrap">Develop artificial intelligence and machine learning models and systems.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[97.766px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Average Salary:</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[97.77px] top-0 w-[125px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">$110,000 - $180,000</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[390px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[83.734px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Growth Rate:</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[83.73px] top-0 w-[196.031px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">40% (Much faster than average)</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[20px] left-[402px] top-0 w-[390px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[67.984px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Education:</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[67.98px] top-0 w-[346.188px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">{`Master's or PhD in Computer Science, AI, or related field`}</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[792px]" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[52px] left-0 top-[72px] w-[792px]" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#6a7282] text-[14px]">Required Skills:</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-start left-0 px-[8px] py-[4px] rounded-[4px] top-0 w-[105.906px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Deep Learning</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-start left-[113.91px] px-[8px] py-[4px] rounded-[4px] top-0 w-[59.422px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Python</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-start left-[181.33px] px-[8px] py-[4px] rounded-[4px] top-0 w-[84.781px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">TensorFlow</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-start left-[274.11px] px-[8px] py-[4px] rounded-[4px] top-0 w-[95.406px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Mathematics</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-start left-[377.52px] px-[8px] py-[4px] rounded-[4px] top-0 w-[70.938px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Research</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
      <Text10 />
      <Text11 />
      <Text12 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[56px] items-start left-0 top-[140px] w-[792px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] h-[208px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container11 />
        <Paragraph2 />
        <Container12 />
        <Container16 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
            <path d={svgPaths.p1b764040} fill="var(--fill-0, #FB2C36)" id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#fef2f2] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[208px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Button7 />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#155dfc] h-[40px] relative rounded-[10px] shrink-0 w-[140.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[70.5px] text-[16px] text-center text-white top-[6px] whitespace-nowrap">View Roadmap</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#9810fa] h-[40px] relative rounded-[10px] shrink-0 w-[160.922px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80px] text-[16px] text-center text-white top-[6px] whitespace-nowrap">Ask AI About This</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[312px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Container9 />
        <Container19 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[124.063px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#0a0a0a] text-[20px] whitespace-nowrap">Data Scientist</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#dbeafe] h-[28px] relative rounded-[33554400px] shrink-0 w-[97.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1447e6] text-[14px] whitespace-nowrap">Engineering</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#dcfce7] h-[28px] relative rounded-[33554400px] shrink-0 w-[93.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[20px] left-[12px] text-[#008236] text-[14px] top-[2px] w-[70px]">90% Match</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-0 top-0 w-[792px]" data-name="Container">
      <Heading4 />
      <Text13 />
      <Text14 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-0 top-[36px] w-[792px]" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-2px] whitespace-nowrap">Analyze complex data to help organizations make better decisions.</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[97.766px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Average Salary:</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[97.77px] top-0 w-[125px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">$100,000 - $160,000</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[390px]" data-name="Container">
      <Text15 />
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[83.734px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Growth Rate:</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[83.73px] top-0 w-[196.031px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">36% (Much faster than average)</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute h-[20px] left-[402px] top-0 w-[390px]" data-name="Container">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[67.984px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] whitespace-nowrap">Education:</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[67.98px] top-0 w-[437.75px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">{`Bachelor's or Master's degree in Data Science, Statistics, or related field`}</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[792px]" data-name="Container">
      <Text19 />
      <Text20 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[52px] left-0 top-[72px] w-[792px]" data-name="Container">
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[#6a7282] text-[14px]">Required Skills:</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-start left-0 px-[8px] py-[4px] rounded-[4px] top-0 w-[69.484px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Statistics</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-start left-[77.48px] px-[8px] py-[4px] rounded-[4px] top-0 w-[125.938px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Machine Learning</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-start left-[211.42px] px-[8px] py-[4px] rounded-[4px] top-0 w-[59.422px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Python</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-start left-[278.84px] px-[8px] py-[4px] rounded-[4px] top-0 w-[40.594px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">SQL</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[28px] items-start left-[327.44px] px-[8px] py-[4px] rounded-[4px] top-0 w-[126.219px]" data-name="Text">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Data Visualization</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <Text22 />
      <Text23 />
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[56px] items-start left-0 top-[140px] w-[792px]" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] h-[208px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container23 />
        <Paragraph3 />
        <Container24 />
        <Container28 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
            <path d={svgPaths.p1b764040} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[208px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Button10 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#155dfc] h-[40px] relative rounded-[10px] shrink-0 w-[140.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[70.5px] text-[16px] text-center text-white top-[6px] whitespace-nowrap">View Roadmap</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#9810fa] h-[40px] relative rounded-[10px] shrink-0 w-[160.922px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[80px] text-[16px] text-center text-white top-[6px] whitespace-nowrap">Ask AI About This</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[312px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[24px] px-[24px] relative size-full">
        <Container21 />
        <Container31 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[684px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container8 />
      <Container20 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[928px] items-start left-[384px] top-[175px] w-[896px]" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function StudentDashboard() {
  return (
    <div className="bg-[#f9fafb] h-[1135px] relative shrink-0 w-full" data-name="StudentDashboard">
      <Header />
      <Container2 />
      <Container4 />
    </div>
  );
}

export default function AiRec() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="ai rec.">
      <StudentDashboard />
    </div>
  );
}