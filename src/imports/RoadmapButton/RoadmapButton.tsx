import svgPaths from "./svg-yqeclxb3dy";

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
          <path d={svgPaths.p9034a80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 4.80333V17.3033" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 2.69667V15.1967" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[58px] relative shrink-0 w-[171.344px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon3 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[100.5px] text-[#155dfc] text-[16px] text-center top-[14px] whitespace-nowrap">Career Roadmaps</p>
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

function Heading1() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Arimo:Regular',sans-serif] font-normal leading-[32px] min-w-px relative text-[#0a0a0a] text-[24px]">Career Roadmaps</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[198.641px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[32px] relative shrink-0 text-[#0a0a0a] text-[24px] whitespace-nowrap">Software Engineer</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p23ad1400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10V2" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#155dfc] h-[40px] relative rounded-[10px] shrink-0 w-[163.281px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[94px] text-[16px] text-center text-white top-[6px] whitespace-nowrap">Download PDF</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-between left-0 top-0 w-[832px]" data-name="Container">
      <Heading2 />
      <Button6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[282.094px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#0a0a0a] text-[18px] top-[-1px] whitespace-nowrap">Learn Programming Fundamentals</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-white h-[28px] relative rounded-[33554400px] shrink-0 w-[95.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">3-6 months</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Text />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-2px] w-[727px]">Start with a programming language like Python or JavaScript. Understand variables, loops, conditionals, and functions.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[8px] h-[132px] items-start left-[34px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[798px]" data-name="Container">
      <Container11 />
      <Paragraph1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[-10px] rounded-[33554400px] size-[24px] top-0" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">1</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8ec5ff] border-l-2 border-solid inset-0 pointer-events-none" />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[307.719px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#0a0a0a] text-[18px] top-[-1px] whitespace-nowrap">Study Data Structures and Algorithms</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-white h-[28px] relative rounded-[33554400px] shrink-0 w-[95.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">4-6 months</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Text1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-2px] w-[708px]">Master essential data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, dynamic programming).</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[8px] h-[132px] items-start left-[34px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[798px]" data-name="Container">
      <Container15 />
      <Paragraph2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[-10px] rounded-[33554400px] size-[24px] top-0" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">2</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8ec5ff] border-l-2 border-solid inset-0 pointer-events-none" />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[111.344px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#0a0a0a] text-[18px] top-[-1px] whitespace-nowrap">Build Projects</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-white h-[28px] relative rounded-[33554400px] shrink-0 w-[78.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Ongoing</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Text2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-2px] w-[732px]">Create personal projects to apply your knowledge. Build web applications, mobile apps, or contribute to open source.</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[8px] h-[132px] items-start left-[34px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[798px]" data-name="Container">
      <Container19 />
      <Paragraph3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[-10px] rounded-[33554400px] size-[24px] top-0" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">3</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8ec5ff] border-l-2 border-solid inset-0 pointer-events-none" />
      <Container18 />
      <Container20 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[401.297px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#0a0a0a] text-[18px] top-[-1px] whitespace-nowrap">Learn Web Development or Mobile Development</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-white h-[28px] relative rounded-[33554400px] shrink-0 w-[102.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">6-12 months</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Text3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-2px] whitespace-nowrap">Specialize in front-end (React, Vue) and back-end (Node.js, Django) or mobile (React Native, Flutter).</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[8px] h-[108px] items-start left-[34px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[798px]" data-name="Container">
      <Container23 />
      <Paragraph4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[-10px] rounded-[33554400px] size-[24px] top-0" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">4</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8ec5ff] border-l-2 border-solid inset-0 pointer-events-none" />
      <Container22 />
      <Container24 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[219.266px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#0a0a0a] text-[18px] top-[-1px] whitespace-nowrap">Internships and Experience</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-white h-[28px] relative rounded-[33554400px] shrink-0 w-[95.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">3-6 months</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Text4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-2px] whitespace-nowrap">Apply for internships or entry-level positions to gain real-world experience.</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[8px] h-[108px] items-start left-[34px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[798px]" data-name="Container">
      <Container27 />
      <Paragraph5 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[-10px] rounded-[33554400px] size-[24px] top-0" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">5</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8ec5ff] border-l-2 border-solid inset-0 pointer-events-none" />
      <Container26 />
      <Container28 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[169.578px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[28px] left-0 text-[#0a0a0a] text-[18px] top-[-1px] whitespace-nowrap">Continuous Learning</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-white h-[28px] relative rounded-[33554400px] shrink-0 w-[78.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Ongoing</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Text5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#364153] text-[16px] top-[-2px] whitespace-nowrap">Stay updated with new technologies, frameworks, and best practices. Attend conferences and workshops.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[8px] h-[108px] items-start left-[32px] pt-[24px] px-[24px] rounded-[10px] top-0 w-[800px]" data-name="Container">
      <Container31 />
      <Paragraph6 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#155dfc] content-stretch flex items-center justify-center left-[-12px] rounded-[33554400px] size-[24px] top-0" data-name="Container">
      <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">6</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container32 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1032px] items-start left-0 top-[64px] w-[832px]" data-name="Container">
      <Container9 />
      <Container13 />
      <Container17 />
      <Container21 />
      <Container25 />
      <Container29 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[24px] left-0 top-[1120px] w-[148.875px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-[74.5px] text-[#155dfc] text-[16px] text-center top-[-2px] whitespace-nowrap">← Back to all careers</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[1144px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Button7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[1208px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[32px] relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1264px] items-start left-[384px] top-[175px] w-[896px]" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function StudentDashboard() {
  return (
    <div className="bg-[#f9fafb] h-[1471px] relative shrink-0 w-full" data-name="StudentDashboard">
      <Header />
      <Container2 />
      <Container4 />
    </div>
  );
}

export default function RoadmapButton() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="roadmap button">
      <StudentDashboard />
    </div>
  );
}