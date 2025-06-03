import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaInstagram, FaPalette, FaGlassCheers } from 'react-icons/fa';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { BsQuote } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

// Types pour les photos
interface Photo {
    id: number;
    src: string;
    alt: string;
    category: string;
}

// Données des services
const services = [
    {
        icon: <FaCamera className="text-3xl mb-3" />,
        title: "Portraits naturels et spontanés",
        description: "Capturer votre authenticité dans des moments naturels"
    },
    {
        icon: <FaInstagram className="text-3xl mb-3" />,
        title: "Photos lifestyle pour réseaux sociaux",
        description: "Contenu visuel adapté à votre présence en ligne"
    },
    {
        icon: <FaPalette className="text-3xl mb-3" />,
        title: "Captures artistiques pour projets créatifs",
        description: "Une vision artistique pour vos projets"
    },
    {
        icon: <FaGlassCheers className="text-3xl mb-3" />,
        title: "Événements privés (petits formats)",
        description: "Immortaliser vos moments spéciaux"
    }
];

// Données des photos (à remplacer par tes propres photos)
const photos: Photo[] = [
    { id: 1, src: "/images/photography/photo1.jpg", alt: "Portrait artistique", category: "portrait" },
    { id: 2, src: "/images/photography/photo2.jpg", alt: "Paysage urbain", category: "landscape" },
    { id: 3, src: "/images/photography/photo3.jpg", alt: "Lifestyle", category: "lifestyle" },
    { id: 4, src: "/images/photography/photo4.jpg", alt: "Nature", category: "nature" },
    { id: 5, src: "/images/photography/photo5.jpg", alt: "Architecture", category: "architecture" },
    { id: 6, src: "/images/photography/photo6.jpg", alt: "Street photography", category: "street" },
    { id: 7, src: "/images/photography/photo7.jpg", alt: "Portrait en studio", category: "portrait" },
    { id: 8, src: "/images/photography/photo8.jpg", alt: "Événement", category: "event" },
    { id: 9, src: "/images/photography/photo9.jpg", alt: "Nature morte", category: "still-life" }
];

const PhotographySection: React.FC = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
            <div className="container mx-auto px-4">
                {/* En-tête de section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        📸 Photographie mobile – Une passion au service de l'émotion
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Capturer des instants authentiques avec simplicité et sensibilité. La photographie mobile est pour moi un terrain d'expression libre, une manière d'honorer la beauté du quotidien, accessible à tous.
                    </p>
                </motion.div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300"
                        >
                            <div className="text-blue-400">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Mention spéciale */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 bg-blue-900/20 p-8 rounded-xl border border-blue-800/30"
                >
                    <p className="text-lg md:text-xl text-gray-300 italic">
                        💬 Pas de tarif fixe : vous jugez mon travail et rémunérez selon votre cœur. Je ne demande que le remboursement du déplacement, et un repas si nécessaire.
                    </p>
                </motion.div>

                {/* Galerie */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                    {photos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative group cursor-pointer overflow-hidden rounded-lg"
                            onClick={() => setSelectedPhoto(photo)}
                        >
                            <div className="aspect-w-4 aspect-h-3 bg-gray-800">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                    <MdOutlinePhotoCamera className="text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Boutons de contact */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
                    <a
                        href="mailto:sullivanjoro13@gmail.com"
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-300"
                    >
                        <HiOutlineMail className="text-xl" />
                        Me contacter par email
                    </a>
                    <a
                        href="https://wa.me/261341060802"
                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-colors duration-300"
                    >
                        <FaWhatsapp className="text-xl" />
                        Me contacter sur WhatsApp
                    </a>
                </div>

                {/* Citation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <BsQuote className="text-4xl text-blue-500 mx-auto mb-4" />
                    <p className="text-xl text-gray-400 italic">
                        "L'émotion d'un instant vaut parfois plus que l'équipement."
                    </p>
                </motion.div>
            </div>

            {/* Modal pour afficher les photos en grand */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="relative max-w-4xl w-full">
                        <img
                            src={selectedPhoto.src}
                            alt={selectedPhoto.alt}
                            className="w-full h-auto rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-2xl"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PhotographySection; 