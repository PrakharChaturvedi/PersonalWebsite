import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { Linkedin, Github } from './ui/Icons';
import { Terminal } from './ui/Terminal';
import { ScrollReveal } from './ui/ScrollReveal';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    // TODO: Replace with your actual Web3Forms Access Key
    formData.append("access_key", "390d7368-587d-4ca0-a84f-b39f30e008a7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'Prakharx45@gmail.com', href: 'mailto:Prakharx45@gmail.com', color: 'text-blue-400', bgColor: 'bg-blue-500/10 border-blue-500/20' },
    { icon: Phone, label: 'Phone', value: '+91 9630756442', href: 'tel:+919630756442', color: 'text-green-400', bgColor: 'bg-green-500/10 border-green-500/20' },
    { icon: Linkedin, label: 'LinkedIn', value: '/in/prakharchaturvedi001', href: 'https://linkedin.com/in/prakharchaturvedi001/', color: 'text-purple-400', bgColor: 'bg-purple-500/10 border-purple-500/20' },
    { icon: Github, label: 'GitHub', value: '/PrakharChaturvedi', href: 'https://github.com/PrakharChaturvedi', color: 'text-orange-400', bgColor: 'bg-orange-500/10 border-orange-500/20' },
  ];

  return (
    <section id="contact" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-pink-500 to-transparent"></div>
            <span className="text-xs font-mono text-pink-400 uppercase tracking-widest">06 / contact</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-white">
                Let's build<br />something <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">remarkable</span>.
              </h2>
              <p className="text-zinc-400 text-lg mt-6 max-w-md leading-relaxed">
                I'm always open to discussing new opportunities, product ideas, or interesting technical challenges. Drop me a line.
              </p>

              <div className="mt-10 space-y-4">
                {contactInfo.map((info, i) => (
                  <a 
                    key={i}
                    href={info.href} 
                    target={info.href.startsWith('http') ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/[0.02] transition-all"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-colors ${info.bgColor} group-hover:brightness-125`}>
                      <info.icon className={`w-5 h-5 ${info.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">{info.label}</div>
                      <div className="text-zinc-200 group-hover:text-white transition-colors">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <Terminal title="prakhar@portfolio: ~/contact">
              <form onSubmit={handleSubmit} className="space-y-6 font-mono">
                <div className="text-zinc-400 mb-4 text-xs md:text-sm">
                  Run <span className="text-purple-400">./send_message.sh</span> to contact Prakhar.
                </div>
                
                <div className="space-y-1 group">
                  <label className="text-zinc-500 text-sm flex gap-2">
                    <span className="text-green-400">prakhar@portfolio:~$</span>
                    <span className="text-purple-400">read</span> name
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">❯</span>
                    <input type="text" name="name" required placeholder="_" className="w-full bg-transparent border-none p-0 focus:ring-0 text-zinc-300 placeholder-zinc-700 outline-none caret-blue-400" />
                  </div>
                </div>

                <div className="space-y-1 group">
                  <label className="text-zinc-500 text-sm flex gap-2">
                    <span className="text-green-400">prakhar@portfolio:~$</span>
                    <span className="text-purple-400">read</span> email
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">❯</span>
                    <input type="email" name="email" required placeholder="_" className="w-full bg-transparent border-none p-0 focus:ring-0 text-zinc-300 placeholder-zinc-700 outline-none caret-blue-400" />
                  </div>
                </div>

                <div className="space-y-1 group">
                  <label className="text-zinc-500 text-sm flex gap-2">
                    <span className="text-green-400">prakhar@portfolio:~$</span>
                    <span className="text-purple-400">cat</span> &lt;&lt; 'EOF' &gt; message.txt
                  </label>
                  <div className="flex items-start gap-2 pt-1">
                    <span className="text-blue-400 mt-0.5">❯</span>
                    <textarea rows="4" name="message" required placeholder="Type your message here..." className="w-full bg-transparent border-none p-0 focus:ring-0 text-zinc-300 placeholder-zinc-700 outline-none resize-none caret-blue-400"></textarea>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={status !== 'idle'}
                    className="w-full bg-[#09090b] border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 rounded px-4 py-2 text-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-zinc-300"></div>
                        Executing...
                      </>
                    ) : status === 'success' ? (
                      <span className="text-green-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        [Process Completed]
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span className="text-green-400">./</span>send_message.sh
                        <Send className="w-3 h-3 ml-1 opacity-70" />
                      </span>
                    )}
                  </button>
                </div>
                
                {status === 'success' && (
                  <div className="text-green-400 text-sm mt-4 animate-fade-in">
                    &gt; Connection established.<br/>
                    &gt; Data transmitted successfully.<br/>
                    &gt; Prakhar will respond shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div className="text-red-400 text-sm mt-4 animate-fade-in">
                    &gt; ERROR: Connection failed.<br/>
                    &gt; Please try again or use direct email.
                  </div>
                )}
              </form>
            </Terminal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
