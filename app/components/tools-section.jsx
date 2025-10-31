'use client';

import { CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiMongodb, SiNodedotjs, SiExpress, SiFirebase, SiSocketdotio, SiPostgresql, SiMysql, SiBootstrap, SiMaterialdesign } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const toolsData = [
  {
    value: 'frontend',
    label: 'Frontend',
    tools: [
      { name: 'React', icon: <SiReact className="text-cyan-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
      { name: 'Material UI', icon: <SiMaterialdesign className="text-blue-500" /> },
      {name:'typescript', icon: <SiTypescript className="text-blue-500" /> },
      // ...add more
    ],
  },
  {
    value: 'backend',
    label: 'Backend',
    tools: [
      { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-white" /> },
      { name: 'Socket.io', icon: <SiSocketdotio className="text-black dark:text-white" /> },
      // ...add more
    ],
  },
  {
    value: 'databases',
    label: 'Databases',
    tools: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
      // ...add more
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  }),
};

export function ToolsSection() {
  return (
    <section id="tools" className="py-20 md:py-32 bg-card/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            My Toolbox
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-foreground/80 mt-4">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="flex flex-col md:flex-row gap-8">
          <TabsList className="flex flex-row justify-start overflow-x-auto md:flex-col md:w-64 h-auto bg-transparent p-0 space-x-2 md:space-x-0 md:space-y-2">
            {toolsData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex-shrink-0 w-auto md:w-full justify-start text-base p-4 rounded-md data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-lg"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1">
            {toolsData.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="m-0">
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent className="p-0">
                    <motion.div
                      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {},
                      }}
                    >
                      <AnimatePresence>
                        {tab.tools.map((tool, i) => (
                          <motion.div
                            key={tool.name}
                            className="flex items-center gap-2 rounded-lg bg-card p-4 transition-all hover:shadow-xl hover:-translate-y-1 border"
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                          >
                            {tool.icon}
                            <span className="font-medium text-foreground/90">{tool.name}</span>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
