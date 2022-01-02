var B = Object.defineProperty,
	E = Object.defineProperties;
var K = Object.getOwnPropertyDescriptors;
var j = Object.getOwnPropertySymbols;
var M = Object.prototype.hasOwnProperty,
	z = Object.prototype.propertyIsEnumerable;
var C = (r, i, o) =>
		i in r ? B(r, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (r[i] = o),
	g = (r, i) => {
		for (var o in i || (i = {})) M.call(i, o) && C(r, o, i[o]);
		if (j) for (var o of j(i)) z.call(i, o) && C(r, o, i[o]);
		return r;
	},
	f = (r, i) => E(r, K(i));
import {
	j as w,
	r as l,
	O as q,
	N as m,
	G as X,
	S as L,
	a as H,
	b as G,
	M as Y,
	H as I,
	I as S,
	C as Q,
	c as $,
	L as b,
	d as R,
	e as _,
	f as ee,
	g as te,
	u as ie,
	F as re,
	h as ne,
	i as oe,
	R as J,
	k as u,
	A as F,
	l as U,
	m as ae,
	n as se,
	o as le,
	B as ce,
} from "./vendor.c3c931b4.js";
const de = function () {
	const i = document.createElement("link").relList;
	if (i && i.supports && i.supports("modulepreload")) return;
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
	new MutationObserver((n) => {
		for (const s of n)
			if (s.type === "childList")
				for (const c of s.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && a(c);
	}).observe(document, { childList: !0, subtree: !0 });
	function o(n) {
		const s = {};
		return (
			n.integrity && (s.integrity = n.integrity),
			n.referrerpolicy && (s.referrerPolicy = n.referrerpolicy),
			n.crossorigin === "use-credentials"
				? (s.credentials = "include")
				: n.crossorigin === "anonymous"
				? (s.credentials = "omit")
				: (s.credentials = "same-origin"),
			s
		);
	}
	function a(n) {
		if (n.ep) return;
		n.ep = !0;
		const s = o(n);
		fetch(n.href, s);
	}
};
de();
const e = w.exports.jsx,
	t = w.exports.jsxs,
	O = w.exports.Fragment;
function ue() {
	const [r, i] = l.exports.useState(!1);
	return (
		l.exports.useEffect(() => {
			q(document.body, {
				nativeScrollbarsOverlaid: { initialize: !0 },
				scrollbars: { autoHide: "scroll", autoHideDelay: 800 },
				callbacks: {
					onScroll: function (o) {
						(window.innerHeight / 100) * 6.7 < o.target.scrollTop ? i(!0) : i(!1);
					},
				},
			});
		}, []),
		t("nav", {
			className: r ? "scrolled" : "",
			children: [
				e("div", { children: e(m, { to: "/" }) }),
				t("ul", {
					children: [
						e(m, { to: "/about", children: "about" }),
						e(m, { to: "/promises", children: "our promise" }),
						e(m, { to: "/process", children: "our process" }),
						e(m, { to: "/solutions", end: !0, children: "solutions" }),
						e(m, { to: "/careers", children: "careers" }),
					],
				}),
				e(m, { to: "/letstalk", children: "let's talk" }),
			],
		})
	);
}
var pe = "./brain.eec54360.png",
	he = "./what_we_do.8c9dee30.png";
const me = Object.freeze([
		{ icon: e(X, {}), p: "Advanced operation and productivity" },
		{ icon: e(L, {}), p: "Become more efficient agile and innovative" },
		{ icon: e(H, {}), p: "Reduce cost, drive growth" },
	]),
	ge = Object.freeze([
		{ icon: e(G, {}), p: "Increase customer engagement" },
		{ icon: e(Y, {}), p: "Make Digital work for your business" },
		{ icon: e(I, {}), p: "Empower the workforce with insight" },
	]);
var fe = "./1.5a5f93f0.png",
	be = "./2.5eeaf71d.png",
	ve = "./3.7f95ff66.png",
	ke = Object.freeze([
		{ name: "Nasik", position: "Head of Design", img: fe },
		{ name: "Izzath", position: "Head of Development", img: be },
		{ name: "Rifadh", position: "Head of Delivery", img: ve },
	]);
var Ae = "./1.ae8571c6.jpg",
	ye = "./2.0cf6ac5a.jpg",
	we = "./3.c2a4895d.jpg",
	D = Object.freeze([
		{
			img: Ae,
			h2: "Future Ready. Now",
			p: "Delivering efficiency, experiences and innovations through the power of people and technology.",
		},
		{
			img: ye,
			h2: "We execute with excellence. Always.",
			p: "We succeed when we make our clients successful.",
		},
		{
			img: we,
			h2: "Technology that transforms.",
			p: "We design and build technology solutions and products that enable our clients to make effective decisions, work better together, and ultimately thrive",
		},
	]);
function Se() {
	const [r, i] = l.exports.useState(0);
	return (
		l.exports.useEffect(() => {
			const o = setInterval(() => (D.length - 1 === r ? i(0) : i(r + 1)), 3e3);
			return () => clearInterval(o);
		}),
		e("section", {
			className: "slides",
			children: D.map(({ img: o, h2: a, p: n }, s) =>
				t(
					"article",
					{
						style: { transform: `translateX(-${r * 100}%)` },
						children: [
							e("img", { src: o, alt: "slide" }),
							t("div", { children: [e("h2", { children: a }), e("p", { children: n })] }),
						],
					},
					s
				)
			),
		})
	);
}
var Oe = Object.freeze([
	{
		icon: e(S, {}),
		link: "/solutions/mobile_applications",
		title: "Mobile Applications",
		p: "We have extensive experience with React Native, AWS, Firebase, NodeJS, TypeScript, and more",
	},
	{
		icon: e(Q, {}),
		link: "/solutions/web_applications",
		title: "Web Applications",
		p: "Our expertise lies in React, TypeScript, Node.js, Express, MongoDB, GraphQL, and more",
	},
	{
		icon: e($, {}),
		link: "/solutions/business_automation",
		title: "Workflow Automation",
		p: "Harness the power of digital automation to allow your people to focus on real business",
	},
]);
function W() {
	return e("div", {
		className: "solution",
		children: Oe.map(({ link: r, icon: i, title: o, p: a }, n) =>
			t(b, { to: r, children: [t("h3", { children: [i, o] }), e("p", { children: a })] }, n)
		),
	});
}
function p(r, i) {
	r(() => {
		(document.title = i), window.scrollTo(0, 0);
	}, []);
}
function xe() {
	p(l.exports.useEffect, "Akto Solutions");
	const r = ({ icon: n, p: s }) => t("div", { children: [e("p", { children: n }), s] }),
		i = ({ list: n }) =>
			e("article", { children: n.map(({ icon: s, p: c }, d) => e(r, { icon: s, p: c }, d)) }),
		o = ({ title: n, desc: s }) =>
			t(O, { children: [e("h3", { children: n }), e("p", { children: s })] });
	return t("section", {
		className: "home",
		children: [
			e(Se, {}),
			t("header", {
				children: [
					e("h2", { children: "What keeps you up at night?" }),
					e("p", {
						children: "Our solutions can help accelerate your business transformation and innovation.",
					}),
				],
			}),
			t("article", {
				children: [
					t("div", {
						children: [
							e(o, {
								title: "We transform businesses for the digital era.",
								desc:
									"We work collaboratively with our customers to create a deep understanding of the business process, opportunities and risks presented by new emerging technologies and think creatively about how to use these technologies to improve business performance.",
							}),
							e(o, {
								title: "We steer your business through change.",
								desc:
									"Collaboration is at the heart of our culture and the way we work with you. Our approach is shaped around your business and IT priorities, and based on the latest thinking about digital and cloud solutions, business applications and technology services",
							}),
						],
					}),
					e("img", { src: he, alt: "cover photo" }),
				],
			}),
			t("section", {
				children: [
					t("header", {
						children: [
							e("h2", { children: "Our Solutions" }),
							e("p", { children: "Innovation, design, and technology that transforms" }),
						],
					}),
					e(W, {}),
				],
			}),
			t("section", {
				className: "brain",
				children: [
					t("header", {
						children: [
							e("h2", { children: "Don't change your business processes" }),
							e("p", { children: "Transform them" }),
						],
					}),
					t("div", {
						children: [
							e(i, { list: me }),
							e("img", { src: pe, alt: "image of a circuit, shaped like a brain" }),
							e(i, { list: ge }),
						],
					}),
				],
			}),
			t("section", {
				className: "team",
				children: [
					t("header", {
						children: [
							e("h2", { children: "Meet Akto's team" }),
							e("p", { children: "Spotlight on the people leading the way for Akto and our clients. " }),
						],
					}),
					e("div", {
						children: e(
							() =>
								ke.map(({ name: n, position: s, img: c }, d) =>
									t(
										"article",
										{
											children: [
												e("img", { src: c, alt: `image of ${n}` }),
												e("h4", { children: n }),
												e("p", { children: s }),
											],
										},
										d
									)
								),
							{}
						),
					}),
				],
			}),
			e("footer", {
				children: t("p", {
					children: [
						"All Rights Reserved | Made by",
						" ",
						e("a", {
							target: "_blank",
							href: "https://www.linkedin.com/in/anb1142/",
							children: "Anuja Nimesh",
						}),
					],
				}),
			}),
		],
	});
}
function h({ className: r, title: i, subtitle: o, children: a }) {
	return t("section", {
		className: "infopage",
		children: [
			t("div", { children: [e("h1", { children: i }), o && e("p", { children: o })] }),
			r ? e("section", { className: r, children: a }) : a,
		],
	});
}
function v() {
	return t("aside", {
		children: [
			e("p", {
				children: [
					"How can we help?",
					"Let us help you!",
					"We are here to help you!",
					"Want to work with us ?",
				][Math.floor(Math.random() * 4)],
			}),
			t("div", {
				children: [
					e(b, { to: "/letstalk", children: "Let's Talk" }),
					e(b, { to: "/get_a_quote", children: "Get a Quote" }),
				],
			}),
		],
	});
}
function Ne() {
	return (
		p(l.exports.useEffect, "Akto | Solutions"),
		t(h, {
			className: "solutions",
			title: "Our Solutions",
			subtitle: "Innovation, design, and technology that transforms",
			children: [e(W, {}), e(v, {})],
		})
	);
}
var je = "./1.e71fdbc6.jpg",
	Ce = "./2.d601c7d6.jpg",
	Ie = "./3.6fac2bf4.jpg",
	Re = Object.freeze([
		{ img: je, p: "Unlock the hidden potential of your product concept" },
		{ img: Ce, p: "Listen intently and share insights generously" },
		{ img: Ie, p: "Bring a culture of radical collaboration" },
	]);
function k({ title: r, subtitle: i, list: o }) {
	return t("section", {
		className: "cardlist",
		children: [
			t("header", { children: [r && e("h2", { children: r }), i && e("p", { children: i })] }),
			e(
				() =>
					e("section", {
						children: o.map(({ img: n, p: s, h3: c }, d) =>
							t(
								"article",
								{
									children: [
										e("img", { src: n, alt: "cover photo" }),
										t("div", { children: [e("p", { children: s }), c && e("h3", { children: c })] }),
									],
								},
								d
							)
						),
					}),
				{}
			),
		],
	});
}
function Je() {
	return (
		p(l.exports.useEffect, "Akto | Our Promise"),
		e(h, {
			title: "Our Promise",
			subtitle: "We succeed when we make our clients successful",
			children: e(k, {
				list: Re,
				title: "When you sign onto an engagement with our team, we assure you that we will...",
			}),
		})
	);
}
var Fe = "./1.f70cfeb6.jpg",
	Ue = "./2.3d4b1e87.jpg",
	De = "./3.d63fb035.jpg",
	We = "./4.7cb990dc.jpg";
const A = Object.freeze("Our Process"),
	y = Object.freeze(
		"Every project has unique requirements, though our fundamental approach stays the same"
	),
	x = Object.freeze([
		{ img: Fe, h3: "Understanding & research", p: "Understanding the problem is half the solution" },
		{ img: Ue, h3: "Design prototyping", p: "Validating the solution" },
		{ img: De, h3: "Product Development", p: "Agile sprints to adopt and change quickly" },
		{ img: We, h3: "Continued support", p: "Feedback and Iteration" },
	]);
function Pe() {
	return (
		p(l.exports.useEffect, "Akto | Process"),
		e(h, { title: A, subtitle: y, children: e(k, { list: x, title: A, subtitle: y }) })
	);
}
function N({ list: r, title: i, subtitle: o }) {
	return t("article", {
		className: "featurelist",
		children: [
			t("header", { children: [i && e("h2", { children: i }), o && e("p", { children: o })] }),
			e(
				() =>
					e("section", {
						children: r.map(({ icon: n, text: s }, c) =>
							t("p", { children: [e("span", { children: n }), s] }, c)
						),
					}),
				{}
			),
		],
	});
}
function Ve({ title: r, content: i, children: o, noContentIcon: a }) {
	const [n, s] = l.exports.useState(!1),
		c = (d) => {
			console.log(d.target),
				!((d.target.tagName !== "SECTION" && d.target.tagName !== "DIV") || i === null) &&
					(s(!n),
					setTimeout(() => d.target.parentNode.parentNode.scrollIntoView({ behavior: "smooth" }), 300));
		};
	return (
		a === void 0 && (a = e(R, {})),
		t("div", {
			className: `dropdetails ${n && "open"} ${i && "available"}`,
			children: [
				t("section", {
					onClick: c,
					children: [t("div", { children: [r, o] }), e("span", { children: i ? e(_, {}) : a })],
				}),
				i && e("article", { children: i }),
			],
		})
	);
}
const Te = t(O, {
	children: [
		e("h4", { children: "About Akto" }),
		t("p", {
			children: [
				"At Akto, our mission is to create great experiences for our clients and their customers through the power of people and technology. ",
				e("br", {}),
				e("br", {}),
				"We're a versatile team that\u2019s passionate about creating products that improve people\u2019s lives. We thrive on innovating solutions to productivity challenges and we seek to rethink how productivity solutions are made.",
			],
		}),
		e("h4", { children: "Opportunity" }),
		t("p", {
			children: [
				"As a Front-end developer at Akto, you'll have an opportunity to collaborate not only with the members of the team but also with our customers. We always work together to create engaging, intuitive, easy to use, and delightful work and experiences that promote balance in our users' lives. ",
				e("br", {}),
				e("br", {}),
				"And because at Akto, we aim to create the best cross-platform apps, you will always be working on cross-platform solutions for our products.",
			],
		}),
		e("h4", { children: "Requirements" }),
		t("ul", {
			children: [
				e("li", { children: "1 year experience as front-end developer" }),
				e("li", { children: "Skilled in MongoDB, Express, React / React Native, NodeJS (MERN stack)" }),
				e("li", { children: "State and Store management within react (MobX, Redux)" }),
				e("li", { children: "Fluency or understanding in handling APIs and Libraries" }),
				e("li", { children: "Experience using TypeScript is an advantage." }),
				e("li", { children: "A user advocate" }),
				e("li", { children: "Problem solver skilled with strong attention to detail" }),
				e("li", { children: "Strong team player" }),
				e("li", {
					children:
						"Comfortable communicating with a multicultural team with diverse communication styles",
				}),
			],
		}),
		e("p", {
			children: e("b", {
				children:
					"If you are a highly driven and innovative digital professional seeking a position that will offer diversity and career progression opportunities, then this is the role for you!",
			}),
		}),
	],
});
var Ze = Object.freeze([
	{ pos: "Front End Developer", content: Te, expand: !0 },
	{ pos: "Full Stack Developer", content: null, expand: !1 },
	{ pos: "UI/UX Designer", content: null, expand: !1 },
]);
function Be() {
	return e("section", {
		className: "careerlist",
		children: Ze.map(({ pos: r, content: i }, o) =>
			e(
				Ve,
				{
					title: r,
					content: i,
					children: i && e(b, { to: r.replace(/\s/g, ""), children: "Apply Now" }),
				},
				o
			)
		),
	});
}
function Ee({ children: r, className: i, closeModal: o, open: a }) {
	return (
		l.exports.useEffect(
			() => (
				ee(document.body),
				() => {
					te(document.body);
				}
			)
		),
		e("section", {
			onClick: ({ target: n }) => {
				n.tagName === "SECTION" && o();
			},
			className: `modal ${a ? "open" : ""}`,
			children: t("div", {
				className: i,
				children: [e("button", { onClick: o, children: "\xD7" }), r],
			}),
		})
	);
}
function Ke() {
	const [r, i] = l.exports.useState(!0);
	let o = ie();
	return {
		open: r,
		closeModal: async (n) => {
			n !== void 0 && n.preventDefault(), i(!1), setTimeout(() => o(-1), 500);
		},
		ModalView: Ee,
	};
}
function Me() {
	const [r, i] = l.exports.useState(!1),
		{ closeModal: o, ModalView: a, open: n } = Ke(),
		[s, c] = l.exports.useState({ name: "", email: "", phone: "", cv: "" });
	return t(a, {
		className: "careerapply",
		closeModal: o,
		open: n,
		children: [
			e("h1", { children: "Submit Your Details" }),
			t("form", {
				className: "form",
				encType: "multipart/form-data",
				onChange: (d) => c((Z) => f(g({}, Z), { [d.target.name]: d.target.value })),
				children: [
					e("input", { type: "text", name: "name", placeholder: "Full Name", value: s.name }),
					e("input", { type: "email", name: "email", placeholder: "Email", value: s.email }),
					e("input", { type: "tel", name: "phone", placeholder: "Phone", value: s.phone }),
					t("label", {
						htmlFor: "file",
						children: [
							e("p", { className: r ? "f2" : "", children: r || "Click here to Upload CV" }),
							e("input", {
								id: "file",
								type: "file",
								name: "cv",
								accept: "application/pdf",
								onChange: (d) => {
									i(d.target.files[0].name);
								},
							}),
						],
					}),
					e("button", {
						type: "submit",
						onClick: (d) => {
							o(d);
						},
						children: "Submit",
					}),
				],
			}),
		],
	});
}
var ze = Object.freeze([
	{ icon: e(I, {}), text: "Opportunities to progress" },
	{ icon: e(R, {}), text: "40 hour work week" },
	{ icon: e(re, {}), text: "Co-working experience" },
	{ icon: e(ne, {}), text: "Continuing education stipend" },
	{ icon: e(oe, {}), text: "Regular socials with coffee" },
]);
function qe() {
	return (
		p(l.exports.useEffect, "Akto | Careers"),
		t(h, {
			title: "Our Careers",
			className: "careers",
			subtitle:
				"We\u2019re looking for people who believe that we can accomplish so much more together than apart",
			children: [
				e(N, {
					title: "Believe you should love where you work? So do we.",
					subtitle: "Our benifits will help you thrive at akto",
					list: ze,
				}),
				t("section", {
					children: [
						t("header", {
							children: [
								e("h2", { children: "Sound like a team you want to work and grow with?" }),
								e("p", { children: "Check out our current job openings" }),
							],
						}),
						e(Be, {}),
						e(J, { children: e(u, { path: ":id", element: e(Me, {}) }) }),
					],
				}),
			],
		})
	);
}
function Xe() {
	return (
		p(l.exports.useEffect, "Akto | Business Automation"),
		t(h, {
			className: "ba",
			title: "Business Automation",
			children: [
				e("p", {
					children:
						"Easy and smooth workflow solutions for your organisation and employees. Let the technology do the communication between applications and platforms, allow your people to focus on real business problems and opportunities.",
				}),
				e(v, {}),
			],
		})
	);
}
var Le = Object.freeze([
	{ icon: e(F, {}), text: "Cloud based" },
	{ icon: e(S, {}), text: "Mobile optimised" },
	{ icon: e(U, {}), text: "Integrated APIs" },
]);
var He =
		"data:image/png;base64,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",
	Ge = "./2.faebace4.png",
	Ye = "./3.b7f7f9bd.png",
	Qe = "./4.0fabf9c9.png",
	$e = "./5.36eed028.png",
	_e = "./6.ea619866.png",
	et = "./0.63052908.png";
const tt = Object.freeze({ img: et, name: "ReactNative", url: "https://reactnative.dev/" }),
	P = Object.freeze([
		{ img: He, name: "TypeScript", url: "https://www.typescriptlang.org/" },
		{ img: Ge, name: "MongoDB", url: "https://www.mongodb.com/" },
		{ img: Ye, name: "ExpressJS", url: "https://expressjs.com/" },
		{ img: Qe, name: "ReactJS", url: "https://reactjs.org/" },
		{ img: $e, name: "NodeJS", url: "https://nodejs.org/" },
		{ img: _e, name: "AWS", url: "https://aws.amazon.com/" },
	]);
function V({ mobileApp: r }) {
	let i;
	return (
		r ? (i = [tt, ...P]) : (i = P),
		t("div", {
			className: "tech",
			children: [
				t("header", {
					children: [
						e("h2", { children: "Our Technologies" }),
						e("p", {
							children:
								"We have the technology expertise and experience to drive results for your business",
						}),
					],
				}),
				e(
					() =>
						e("section", {
							children: i.map(({ url: a, img: n, name: s }, c) =>
								e("a", { href: a, target: "_blank", children: e("img", { src: n, alt: s }) }, c)
							),
						}),
					{}
				),
			],
		})
	);
}
function it() {
	return (
		p(l.exports.useEffect, "Akto | Web App Design & Development"),
		t(h, {
			className: "webapps",
			title: "Web App Design & Development",
			children: [
				e(N, {
					list: Le,
					subtitle:
						"Increasing customer proximity and business effeciency with a custom-made web solution",
				}),
				e(k, { list: x, title: A, subtitle: y }),
				e(V, {}),
				e(v, {}),
			],
		})
	);
}
var rt = Object.freeze([
	{ icon: e(F, {}), text: "Cloud based" },
	{ icon: e(S, {}), text: "Mobile optimised" },
	{ icon: e(ae, {}), text: "Offline Support" },
	{ icon: e(U, {}), text: "Integrated APIs" },
]);
function nt() {
	return (
		p(l.exports.useEffect, "Akto | Mobile App Design & Development"),
		t(h, {
			className: "mobileapps",
			title: "Mobile App Design & Development",
			children: [
				e(N, {
					list: rt,
					subtitle:
						"Transform your business idea with future-ready technologies as a revolutionary mobile application and keep in sync with the demand",
				}),
				e(k, { list: x, title: A, subtitle: y }),
				e(V, { mobileApp: !0 }),
				e(v, {}),
			],
		})
	);
}
function ot() {
	p(l.exports.useEffect, "Akto | Let's Talk");
	const [r, i] = l.exports.useState({ name: "", email: "", reason: "" }),
		o = [
			{ value: "Rapid prototyping", label: "I need to do a rapid prototype for my product idea" },
			{ value: "New Product", label: "I am planning to launch a new product" },
			{ value: "Web Application", label: "I need to build a web application" },
			{ value: "Mobile Application", label: "I need to build a mobile application" },
			{ value: "Workflow Automation", label: "I need to build a work flow solution for my business" },
		];
	return t(h, {
		title: "Let's Talk",
		className: "formpage",
		subtitle: "Find out more about the people leading the way for Akto and our clients.",
		children: [
			t("header", {
				children: [
					e("h2", { children: "Let's schedule a call" }),
					e("p", {
						children: "Fill out the form below, and we'll be in touch to set up a consultive call",
					}),
				],
			}),
			t("form", {
				className: "form",
				onChange: (a) => i((n) => f(g({}, n), { [a.target.name]: a.target.value })),
				children: [
					e("input", { name: "name", type: "text", placeholder: "Name", value: r.name, required: !0 }),
					e("input", {
						name: "email",
						type: "email",
						placeholder: "Email",
						required: !0,
						value: r.email,
					}),
					t("select", {
						name: "reason",
						required: !0,
						children: [
							e("option", {
								value: "",
								defaultValue: !0,
								disabled: !0,
								hidden: !0,
								children: "What are you trying to achieve?",
							}),
							o.map(({ value: a, label: n }, s) => e("option", { value: a, children: n }, s)),
						],
					}),
					e("button", { type: "submit", children: "Submit" }),
				],
			}),
		],
	});
}
var at = "./1.ac7006e6.png",
	st = "./2.ae6a3517.png";
function T({ title: r, p1: i, p2: o, img: a }) {
	return t("article", {
		children: [
			t("div", {
				children: [e("h2", { children: r }), e("p", { children: i }), e("p", { children: o })],
			}),
			e("img", { src: a, alt: "cover photo" }),
		],
	});
}
function lt() {
	return (
		p(l.exports.useEffect, "Akto | About"),
		t(h, {
			className: "about",
			title: "About",
			subtitle: "Supporting our clients in their digital ambitions",
			children: [
				e(T, {
					title: "Our Story",
					p1: "We started as a start-up, working on delivering website solutions for businesses in Sri Lanka. During that experience we observed businesses can do a lot better in the digital world by embracing digital transformation into their organization and we decided to help businesses to transform and grow.",
					p2: "Today we deliver digital transformation solutions for businesses and enterprises. We are privileged to connect with more than 50 customers of various industries from different parts of the world. Our Vision",
					img: at,
				}),
				t("section", {
					children: [
						t("div", {
							children: [
								e("h3", { children: "Our Vision" }),
								e("p", { children: "Accelerate digital transformation in businesses." }),
							],
						}),
						t("div", {
							children: [
								e("h3", { children: "Our Mision" }),
								e("p", {
									children:
										"Creating great experiences for our clients and their customers through the power of people and technology.",
								}),
							],
						}),
					],
				}),
				e(T, {
					title: "What We Do",
					p1: ">We transform businesses for the digital era.",
					p2: "Today we deliver digital transformation solutions for businesses and enterprises. We are privileged to connect with more than 50 customers of various industries from different parts of the world.",
					img: st,
				}),
			],
		})
	);
}
function ct() {
	p(l.exports.useEffect, "Akto | Get a Quote");
	const [r, i] = l.exports.useState({ reason: "", idea: "", name: "" });
	return t(h, {
		title: "Get a quote",
		className: "formpage",
		subtitle: "Please submit your details and we'll email you our pricing",
		children: [
			e("header", { children: e("h2", { children: "Let's get a quote" }) }),
			t("form", {
				className: "form",
				onChange: (a) => i((n) => f(g({}, n), { [a.target.name]: a.target.value })),
				children: [
					t("select", {
						name: "reason",
						required: !0,
						children: [
							e("option", {
								value: "",
								defaultValue: !0,
								selected: !0,
								hidden: !0,
								children: "What is the service Akto can help you with ?",
							}),
							["Mobile Application", "Web Application", "Workflow Automation", "Rapid Prototyping"].map(
								(a, n) => e("option", { value: a, children: a }, n)
							),
						],
					}),
					e("textarea", {
						type: "text",
						name: "idea",
						placeholder: "Can you give us a brief explanation of your idea/solution",
						value: r.idea,
						required: !0,
					}),
					e("input", {
						name: "email",
						type: "email",
						placeholder: "Email",
						value: r.email,
						required: !0,
					}),
					e("button", { type: "submit", children: "Submit" }),
				],
			}),
		],
	});
}
function dt() {
	return t(O, {
		children: [
			e(ue, {}),
			t(J, {
				children: [
					e(u, { path: "/", element: e(xe, {}) }),
					e(u, { path: "/solutions", element: e(Ne, {}) }),
					e(u, { path: "/solutions/business_automation/", element: e(Xe, {}) }),
					e(u, { path: "/solutions/web_applications/", element: e(it, {}) }),
					e(u, { path: "/solutions/mobile_applications/", element: e(nt, {}) }),
					e(u, { path: "/about", element: e(lt, {}) }),
					e(u, { path: "/promises", element: e(Je, {}) }),
					e(u, { path: "/careers/*", element: e(qe, {}) }),
					e(u, { path: "/process", element: e(Pe, {}) }),
					e(u, { path: "/letstalk", element: e(ot, {}) }),
					e(u, { path: "/get_a_quote", element: e(ct, {}) }),
				],
			}),
		],
	});
}
se.render(
	e(le.StrictMode, { children: e(ce, { children: e(dt, {}) }) }),
	document.getElementById("root")
);
