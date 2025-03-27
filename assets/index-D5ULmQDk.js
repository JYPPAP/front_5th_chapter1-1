var g=Object.defineProperty;var p=(t,e,n)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>p(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const c=()=>{const t=localStorage.getItem("user");return t?JSON.parse(t):{}},x=t=>{localStorage.setItem("user",JSON.stringify(t))},v=()=>{localStorage.removeItem("user")},u=()=>(console.log("getUser",c()),Object.keys(c()).length>0),y=t=>{const e=c();localStorage.setItem("user",JSON.stringify({...e,...t}))},a="/front_5th_chapter1-1/",h=()=>{const t=S(),e=s=>t.currentPath===s?"text-blue-600 font-bold":"text-gray-600";return`
      <div class="bg-gray-100 min-h-screen flex justify-center">
          <div class="max-w-md w-full">
          <header class="bg-blue-600 text-white p-4 sticky top-0">
              <h1 class="text-2xl font-bold">항해플러스</h1>
          </header>
  
          <nav id="nav_tab" class="bg-white shadow-md p-2 sticky top-14">
              <ul class="flex justify-around">
              <li><a href="${t.getLinkHref(a)}" class="${e(a)}">홈</a></li>
      ${u()?`
                  <li><a href="${t.getLinkHref(`${a}profile`)}" class="${e(`${a}profile`)}">프로필</a></li>
                  <li><a id="logout" href="#" class="text-gray-600">로그아웃</a></li>
                  `:`
                  <li><a href="${t.getLinkHref(`${a}login`)}" class="${e(`${a}login`)}">로그인</a></li>
                  `}
              </ul>
          </nav>
    `},b=()=>`
        <footer class="bg-gray-200 p-4 text-center">
            <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
    </div>
</div>
`,w=t=>`
  <div class="bg-white rounded-lg shadow p-4">
		<div class="flex items-center mb-2">
			<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
			<div>
				<p class="font-bold">${t.name}</p>
				<p class="text-sm text-gray-500">${t.createdAt}</p>
			</div>
		</div>
		<p>${t.content}</p>
		<div class="mt-2 flex justify-between text-gray-500">
			<button>좋아요</button>
			<button>댓글</button>
			<button>공유</button>
		</div>
  </div>
  `,$=[{id:1,name:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,name:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,name:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,name:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,name:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],P=()=>{const t=$.map(e=>w(e)).join("");return`
  ${h()}
  <main class="p-4">
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
    </div>

    <div class="space-y-4">
      ${t}
    </div>
  </main>
  ${b()}
`},L=()=>{const t=c();return`
  ${h()}
  <main class="p-4">
      <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
          내 프로필
          </h2>
          <form id="profile-form">
          <div class="mb-4">
              <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2"
              >사용자 이름</label
              >
              <input
              type="text"
              id="username"
              name="username"
              value="${t.username}"
              class="w-full p-2 border rounded"
              />
          </div>
          <div class="mb-4">
              <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
              >이메일</label
              >
              <input
              type="email"
              id="email"
              name="email"
              value="${t.email}"
              class="w-full p-2 border rounded"
              />
          </div>
          <div class="mb-6">
              <label
              for="bio"
              class="block text-gray-700 text-sm font-bold mb-2"
              >
                자기소개
              </label>
              <textarea
              id="bio"
              name="bio"
              rows="4"
              class="w-full p-2 border rounded"
              >${t.bio}</textarea>
          </div>
          <button
              type="submit"
              class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
              프로필 업데이트
          </button>
          </form>
      </div>
  </main>

  ${b()}
  `},E=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
    <form id="login-form">
      <div class="mb-4">
      <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
      </div>
      <div class="mb-6">
      <input id="user_pw" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
    </form>
    <div class="mt-4 text-center">
      <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
    </div>
    <hr class="my-6">
    <div class="text-center">
      <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
    </div>
    </div>
  </main>
  `,I=()=>`
<main class="bg-gray-100 flex items-center justify-center min-h-screen">
	<div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
	<h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
	<p class="text-4xl font-bold text-gray-800 mb-4">404</p>
	<p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
	<p class="text-gray-600 mb-8">
		요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
	</p>
	<a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
		홈으로 돌아가기
	</a>
	</div>
</main>
`,A={[a]:P,[a+"profile"]:()=>u()?L():{redirect:a+"login"},[a+"login"]:()=>u()?{redirect:a}:E()},i=class i{static getInstance(e,n){return i.instance||(i.instance=new i(e,n)),i.instance}constructor(e,n={mode:"history"}){if(i.instance)return i.instance;this.routes=e,this.mode=n.mode,this.currentPath=this.mode==="hash"?window.location.hash.slice(1)||"/":window.location.pathname,this.mode==="hash"?window.addEventListener("hashchange",()=>{this.currentPath=window.location.hash.slice(1)||"/",this.render()}):window.addEventListener("popstate",()=>{this.currentPath=window.location.pathname,this.render()}),i.instance=this,document.addEventListener("click",s=>{console.log("click",s.target),s.target.id==="logout"&&(s.preventDefault(),v(),this.navigate("/login")),s.target.matches("[data-link]")&&(s.preventDefault(),this.navigate(s.target.getAttribute("href")))}),document.addEventListener("submit",s=>{if(console.log("submit",s.target),s.preventDefault(),s.target.id==="login-form"){const r=document.getElementById("username").value;x({username:r,email:"",bio:""}),this.navigate("/profile")}if(s.target.id==="profile-form"){const r=document.getElementById("username").value,o=document.getElementById("email").value,l=document.getElementById("bio").value;y({username:r,email:o,bio:l})}})}getLinkHref(e){return this.mode==="hash"?`#${e}`:e}navigate(e){this.mode==="hash"?window.location.hash=e:window.history.pushState({},"",e),this.currentPath=e,this.render()}render(){const e=this.routes[this.currentPath]?this.routes[this.currentPath]():I();if(e&&typeof e=="object"&&e.redirect){this.navigate(e.redirect);return}const n=document.getElementById("root");n&&(n.innerHTML=e)}};f(i,"instance",null);let m=i,d=null;const O=(t={mode:"history"})=>(d=m.getInstance(A,{...t,base:a}),d),S=()=>{if(!d)throw new Error("라우터를 초기화 하지 않았습니다.");return d},j=O({mode:"history"});j.render();
