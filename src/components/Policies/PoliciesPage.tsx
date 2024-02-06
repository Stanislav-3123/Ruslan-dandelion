import {Link} from "react-scroll";
import {useEffect} from "react";
import ContactFormNoNumber from "../ContactForm/ContactFormNoNumber.tsx";
import NavTabsMobile from "./NavTabsMobile.tsx";

const PoliciesPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])
    return (
        <div className="mt-[120px] flex flex-col gap-8">
            <div className="px-4 flex flex-col gap-8">
                <h2 className="text-neutral-900 text-[32px] font-bold font-['Syncopate']">POLICIES</h2>
                <h3>Smart Choice is a modern software company</h3>
                <Link to={"contactForm"} offset={-190} smooth={true} duration={900}
                      className="cursor-pointer bg-white bg-opacity-20 rounded-[100px] border border-white flex flex-row p-4 gap-4 w-full">
                    <p className="w-full self-center">Do you want to collaborate with us?</p>
                    <button className="w-[200px] flex flex-row gap-2 whitespace-nowrap">
                        <h3 className="self-center text-neutral-900 text-base font-bold font-['Roboto'] uppercase">let's
                            talk</h3>
                        <svg
                            className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 hover:rotate-[-45deg] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                        </svg>
                    </button>
                </Link>
            </div>
            <NavTabsMobile/>
            <div className="bg-white rounded-[30px] px-4 py-8 flex flex-col gap-12 w-full">
                <div id={"first"} className="flex flex-col gap-8">
                    <h4 className="policies_headers">PRIVACY POLICY</h4>
                    <p>Arcu cras urna dui quam, lectus sapien
                        lorem sit dictum dapibus pulvinar sit
                        velit ex. Ultricies. Et. Amet ultricies.
                        Ut. In est. Pulvinar lectus non interdum
                        non elit. Elit. Faucibus.</p>
                    <h5>Arcu cras urna dui quam, lectus sapien lorem
                        sit dictum dapibus pulvinar sit velit ex. Ultricies.
                        Et. Amet ultricies. Ut. In est. Pulvinar
                        lectus non interdum non elit. Elit. Faucibus.</h5>
                </div>
                <div id={"second"} className="flex flex-col gap-8">
                    <h4 className="policies_headers">Luctus libero, nec cursus pellentesque</h4>
                    <p>Adipiscing ipsum sed tempus eleifend justo quam,
                        venenatis cras hac nunc molestie hac consectetur
                        sed consectetur sed venenatis venenatis cras nunc
                        sapien quis, imperdiet cursus interdum vel vel dolor
                        faucibus. Orci, vel amet, molestie non tortor, sit quis,
                        mattis faucibus. Sit consectetur molestie venenatis ut.
                        Cras habitasse augue urna mauris interdum amet, odio. Leo,
                        mollis et leo, morbi mattis venenatis dapibus lorem amet,
                        venenatis sit sapien mattis sit dapibus venenatis justo elit.
                        Pellentesque dapibus amet, malesuada pellentesque nulla interdum
                        sapien habitasse hac leo, odio. Interdum in lectus justo nisi dapibus
                        mauris risus leo, venenatis mattis non venenatis odio. Cras platea in
                        in sit interdum sed ex. Vel efficitur amet, amet, lectus sit sit hac id
                        mattis habitasse dictum morbi elit.</p>
                    <h5>Dictum elit. Et. Molestie tempus vulputate ultricies. Dictum. Odio. Nunc
                        mattis sed lorem pulvinar sodales dictum. Arcu mattis aenean eleifend et
                        habitasse habitasse ornare dapibus amet in ex. Lectus luctus sit dictumst.</h5>
                </div>
                <div id={"third"} className="flex flex-col gap-8">
                    <h4 className=" policies_headers">Luctus libero, nec cursus pellentesque</h4>
                    <ol className="px-4 list-disc">
                        <li>Adipiscing ipsum sed tempus eleifend justo quam</li>
                        <li>Orci, vel amet, molestie non tortor, sit quis, mattis faucibus</li>
                        <li>Sit consectetur molestie venenatis ut. </li>
                        <li>Cras habitasse augue urna mauris interdum amet, odio. </li>
                        <li>Leo, mollis et leo, morbi mattis venenatis dapibus lorem amet</li>
                    </ol>
                    <p>Dictum elit. Et. Molestie tempus vulputate ultricies. Dictum.
                        Odio. Nunc mattis sed lorem pulvinar sodales dictum. Arcu mattis
                        aenean eleifend et habitasse habitasse ornare dapibus amet in ex.
                        Lectus luctus sit dictumst.</p>
                </div>
                <div className="flex flex-col gap-8">
                    <h4 className=" policies_headers">Luctus libero, nec cursus pellentesque</h4>
                    <ol className="px-4 list-decimal">
                        <li>Adipiscing ipsum sed tempus eleifend justo quam</li>
                        <li>Orci, vel amet, molestie non tortor, sit quis, mattis faucibus</li>
                        <li>Sit consectetur molestie venenatis ut. </li>
                        <li>Cras habitasse augue urna mauris interdum amet, odio. </li>
                        <li>Leo, mollis et leo, morbi mattis venenatis dapibus lorem amet</li>
                    </ol>
                    <p>Dictum elit. Et. Molestie tempus vulputate ultricies. Dictum.
                        Odio. Nunc mattis sed lorem pulvinar sodales dictum. Arcu mattis
                        aenean eleifend et habitasse habitasse ornare dapibus amet in ex.
                        Lectus luctus sit dictumst.</p>
                </div>
            </div>
            <ContactFormNoNumber/>
        </div>
    );
};

export default PoliciesPage;