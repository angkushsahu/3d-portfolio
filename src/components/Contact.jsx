import { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "hoc";
import { slideIn } from "utils/motion";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    function onInputChange(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function onFormSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setForm({ name: "", email: "", message: "" });
            window.alert("Message sent successfully");
        }, 1000);
    }

    return (
        <section className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form ref={formRef} onSubmit={onFormSubmit} className="mt-12 flex flex-col gap-8">
                    <label htmlFor="name" className="flex flex-col">
                        <span className="font-medium mb-4">Your name</span>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={form.name}
                            onChange={onInputChange}
                            placeholder="What's your name ?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label htmlFor="email" className="flex flex-col">
                        <span className="font-medium mb-4">Your email</span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={form.email}
                            onChange={onInputChange}
                            placeholder="What's your e-mail ?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label htmlFor="message" className="flex flex-col">
                        <span className="font-medium mb-4">Your message</span>
                        <textarea
                            rows="7"
                            name="message"
                            id="message"
                            value={form.message}
                            onChange={onInputChange}
                            placeholder="What do you want to say ?"
                            className="resize-none bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-tertiary py-3 px-8 outline-none font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? "Sending ...." : "Send"}
                    </button>
                </form>
            </motion.div>
            <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
                <EarthCanvas />
            </motion.div>
        </section>
    );
}

export default SectionWrapper(Contact, "contact");
