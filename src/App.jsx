
import React, { useState } from 'react';
import { ArrowRight, BookOpen, Shield, AlertTriangle, Lock, Zap, Users, ArrowLeft, Image } from 'lucide-react';

export default function QuantumCryptoWebsite() {
  const [currentPage, setCurrentPage] = useState('home');

  const Section = ({ title, children }) => (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 mb-6 md:mb-8 border border-cyan-500/20">
      <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 border-b-2 border-cyan-500 pb-2">{title}</h2>
      {children}
    </div>
  );

  const ImagePlaceholder = ({ title, description }) => (
    <div className="bg-gray-900 border-2 border-dashed border-cyan-500/30 rounded-lg p-6 md:p-8 my-4 md:my-6 flex flex-col items-center justify-center hover:border-cyan-500/50 transition-colors">
      <Image className="text-cyan-500/30 mb-3" size={48} />
      <p className="text-cyan-400 font-semibold mb-2">{title}</p>
      <p className="text-gray-500 text-sm text-center">{description}</p>
    </div>
  );

  // ==================== PAGE D'ACCUEIL ====================
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)'
            }}></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs md:text-sm font-semibold mb-8">
                Projet de Recherche Académique 2025-2026
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Information Quantique et<br/>Révolution de la Cybersécurité
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg md:text-2xl mb-4 text-gray-300">
              Université des Sciences et de la Technologie d'Oran Mohamed Boudiaf
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-12 md:mb-16">
              Module : Théorie de l'Information et du Codage<br/>
              3ème Année Ingénieur en Sécurité Informatique
            </p>
          </div>
        </div>

        <div className="bg-gray-800 py-12 md:py-16 border-y border-cyan-500/20">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Le Défi de l'Ère Quantique
            </h2>
            <div className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 md:mb-12 space-y-4">
              <p>
                L'<strong className="text-cyan-400">informatique quantique</strong> représente une rupture technologique majeure qui bouleverse 
                les fondements de la cybersécurité moderne. En exploitant les propriétés de la mécanique quantique — 
                <strong className="text-purple-400"> superposition</strong> et <strong className="text-purple-400">intrication</strong> — les ordinateurs quantiques peuvent 
                résoudre certains problèmes mathématiques de manière exponentiellement plus rapide.
              </p>
              <p>
                Cette puissance exceptionnelle constitue à la fois une <strong className="text-green-400">opportunité révolutionnaire</strong> pour 
                la science et une <strong className="text-red-400">menace existentielle</strong> pour la sécurité de nos communications actuelles.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-red-500 hover:bg-gray-800 transition-colors">
                <h3 className="font-bold text-red-400 mb-2">⚠️ La Menace</h3>
                <p className="text-sm text-gray-400">RSA, ECC et Diffie-Hellman seront brisés par l'algorithme de Shor</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-green-500 hover:bg-gray-800 transition-colors">
                <h3 className="font-bold text-green-400 mb-2">🔐 Les Solutions</h3>
                <p className="text-sm text-gray-400">Cryptographie quantique (BB84) et post-quantique (NIST/ENISA)</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-orange-500 hover:bg-gray-800 transition-colors">
                <h3 className="font-bold text-orange-400 mb-2">⏰ L'Urgence</h3>
                <p className="text-sm text-gray-400">"Harvest Now, Decrypt Later" - La menace est déjà active</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Explorez les Sous-Thèmes
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">Cliquez pour accéder au contenu complet de chaque étudiant</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div onClick={() => setCurrentPage('qubit')} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-cyan-500/20 transition-all cursor-pointer transform hover:-translate-y-2 border border-cyan-500/30 hover:border-cyan-500">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <BookOpen className="text-cyan-400" size={40} />
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold border border-cyan-500/30">
                      Hicham Abdelkadous
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Le Qubit et la Sécurité</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    Fondements quantiques : superposition, intrication, sphère de Bloch
                  </p>
                  <div className="flex items-center text-cyan-400 font-semibold text-sm mb-4">
                    Accéder au sous-thème <ArrowRight className="ml-2" size={16} />
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-xs border border-cyan-500/30">Superposition</span>
                      <span className="bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-xs border border-cyan-500/30">Bloch</span>
                      <span className="bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-xs border border-cyan-500/30">Intrication</span>
                    </div>
                  </div>
                </div>
              </div>

              <div onClick={() => setCurrentPage('menaces')} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-red-500/20 transition-all cursor-pointer transform hover:-translate-y-2 border border-red-500/30 hover:border-red-500">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <AlertTriangle className="text-red-400" size={40} />
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-semibold border border-red-500/30">
                      Imane BAOUCHI
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Les Menaces Quantiques</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    Algorithme de Shor, équation de Mosca, "Harvest Now Decrypt Later"
                  </p>
                  <div className="flex items-center text-red-400 font-semibold text-sm mb-4">
                    Accéder au sous-thème <ArrowRight className="ml-2" size={16} />
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-red-500/10 text-red-400 px-2 py-1 rounded text-xs border border-red-500/30">Shor</span>
                      <span className="bg-red-500/10 text-red-400 px-2 py-1 rounded text-xs border border-red-500/30">QFT</span>
                      <span className="bg-red-500/10 text-red-400 px-2 py-1 rounded text-xs border border-red-500/30">Mosca</span>
                    </div>
                  </div>
                </div>
              </div>

              <div onClick={() => setCurrentPage('crypto-quantique')} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-green-500/20 transition-all cursor-pointer transform hover:-translate-y-2 border border-green-500/30 hover:border-green-500">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Lock className="text-green-400" size={40} />
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
                      Meriem Djellid
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Cryptographie Quantique</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    Protocole BB84, polarisation des photons, théorie de Shannon
                  </p>
                  <div className="flex items-center text-green-400 font-semibold text-sm mb-4">
                    Accéder au sous-thème <ArrowRight className="ml-2" size={16} />
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded text-xs border border-green-500/30">BB84</span>
                      <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded text-xs border border-green-500/30">Shannon</span>
                      <span className="bg-green-500/10 text-green-400 px-2 py-1 rounded text-xs border border-green-500/30">Photons</span>
                    </div>
                  </div>
                </div>
              </div>

              <div onClick={() => setCurrentPage('post-quantique')} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all cursor-pointer transform hover:-translate-y-2 border border-purple-500/30 hover:border-purple-500">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Shield className="text-purple-400" size={40} />
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-semibold border border-purple-500/30">
                      Razane Siguerdidjane
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Solutions Post-Quantiques</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    Standards NIST/ENISA, familles d'algorithmes, transition crypto-agile
                  </p>
                  <div className="flex items-center text-purple-400 font-semibold text-sm mb-4">
                    Accéder au sous-thème <ArrowRight className="ml-2" size={16} />
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded text-xs border border-purple-500/30">NIST</span>
                      <span className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded text-xs border border-purple-500/30">Kyber</span>
                      <span className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded text-xs border border-purple-500/30">Dilithium</span>
                    </div>
                  </div>
                </div>
              </div>

              <div onClick={() => setCurrentPage('vie-privee')} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-orange-500/20 transition-all cursor-pointer transform hover:-translate-y-2 border border-orange-500/30 hover:border-orange-500">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="text-orange-400" size={40} />
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold border border-orange-500/30">
                      Alaa Madaoui
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Impacts sur la Vie Privée</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    Conséquences sociales, économiques et éthiques de l'informatique quantique
                  </p>
                  <div className="flex items-center text-orange-400 font-semibold text-sm mb-4">
                    Accéder au sous-thème <ArrowRight className="ml-2" size={16} />
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-500/10 text-orange-400 px-2 py-1 rounded text-xs border border-orange-500/30">RGPD</span>
                      <span className="bg-orange-500/10 text-orange-400 px-2 py-1 rounded text-xs border border-orange-500/30">Éthique</span>
                      <span className="bg-orange-500/10 text-orange-400 px-2 py-1 rounded text-xs border border-orange-500/30">Société</span>
                    </div>
                  </div>
                </div>
              </div>

              <div onClick={() => setCurrentPage('synthese')} className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-2xl hover:shadow-indigo-500/50 transition-all cursor-pointer transform hover:-translate-y-2 border border-indigo-400/50">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Zap className="text-yellow-300" size={40} />
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/30">
                      Conclusion
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Synthèse et Perspectives</h3>
                  <p className="text-indigo-100 mb-4 text-sm leading-relaxed">
                    Vue d'ensemble du projet, bibliographie complète et perspectives d'avenir
                  </p>
                  <div className="flex items-center text-yellow-300 font-semibold text-sm">
                    Accéder à la synthèse <ArrowRight className="ml-2" size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 border-t border-cyan-500/20 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-lg mb-2 text-gray-300">
              <strong className="text-cyan-400">Projet Académique</strong> • Module : Théorie de l'Information et du Codage
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Université des Sciences et de la Technologie d'Oran Mohamed Boudiaf (USTO-MB)<br/>
              3ème Année Ingénieur en Sécurité Informatique • 2025-2026
            </p>
            <div className="text-xs text-gray-600">
              <p>Imane BAOUCHI • Alaa Madaoui • Hicham Abdelkadous • Meriem Djellid • Razane Siguerdidjane</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==================== PAGE QUBIT ====================
  if (currentPage === 'qubit') {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b-2 border-cyan-500 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 mb-6 text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft size={20} /> Retour à l'accueil
            </button>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Le Qubit et son Rôle dans la Sécurité Informatique
            </h1>
            <p className="text-lg text-gray-400">Par <span className="text-cyan-400 font-semibold">Hicham Abdelkadous</span></p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Section title="Introduction">
            <p className="text-gray-300 leading-relaxed mb-4">
              L'information quantique est une branche émergente de la science qui combine la physique quantique et la théorie de l'information. 
              Elle introduit le concept de <strong className="text-cyan-400">qubit (Quantum Bit)</strong>, une unité d'information capable de représenter plusieurs états simultanément.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cette caractéristique ouvre la voie à de nouvelles applications en calcul, en communication et en sécurité informatique.
            </p>
          </Section>

          <Section title="1. Définition du Qubit">
            <p className="text-gray-300 leading-relaxed mb-6">
              Le qubit, ou Quantum Bit, est l'unité de base de l'information quantique. Contrairement au bit classique (0 ou 1), 
              le qubit peut exister dans une <strong className="text-cyan-400">superposition</strong> de ces deux états à la fois.
            </p>

            <div className="bg-cyan-500/10 border border-cyan-500/30 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-cyan-400 mb-3">État de superposition</h4>
              <div className="bg-gray-950 p-4 rounded font-mono text-center text-cyan-400 border border-cyan-500/30 mb-4">
                |ψ⟩ = α|0⟩ + β|1⟩
              </div>
              <p className="text-gray-300 text-sm">
                avec |α|² + |β|² = 1
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Le qubit représente les deux valeurs en même temps, jusqu'à ce qu'il soit mesuré.
              </p>
            </div>

            <ImagePlaceholder 
              title="Représentation d'un Qubit en Superposition" 
              description="Insérer une image montrant la différence entre bit classique et qubit"
            />

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
              <h4 className="font-bold text-cyan-400 mb-3">Croissance Exponentielle</h4>
              <div className="space-y-2 text-gray-300">
                <p>• 1 qubit → <span className="text-cyan-400">2 états</span> possibles</p>
                <p>• 2 qubits → <span className="text-cyan-400">4 états</span></p>
                <p>• 10 qubits → <span className="text-cyan-400">1024 états</span></p>
                <p>• 300 qubits → environ <span className="text-cyan-400">2³⁰⁰ états</span> simultanés</p>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                C'est cette propriété qui donne à l'informatique quantique une puissance de calcul colossale.
              </p>
            </div>
          </Section>

          <Section title="2. Origine et Fondements Physiques">
            <p className="text-gray-300 leading-relaxed mb-4">
              Le concept de qubit trouve ses origines dans la mécanique quantique, notamment grâce aux travaux de 
              <strong className="text-cyan-400"> Richard Feynman</strong> et <strong className="text-cyan-400">David Deutsch</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-cyan-500/10 border border-cyan-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-cyan-400 mb-3">🔄 Superposition</h4>
                <p className="text-gray-300 text-sm">
                  Permet à une particule d'exister dans plusieurs états simultanément, jusqu'à la mesure.
                </p>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-purple-400 mb-3">🔗 Intrication</h4>
                <p className="text-gray-300 text-sm">
                  Crée une corrélation entre plusieurs qubits, indépendamment de la distance qui les sépare.
                </p>
              </div>
            </div>

            <ImagePlaceholder 
              title="Phénomène d'Intrication Quantique" 
              description="Insérer un schéma illustrant deux qubits intriqués"
            />
          </Section>

          <Section title="3. Construction et Représentation du Qubit">
            <p className="text-gray-300 leading-relaxed mb-6">
              Un qubit peut être implémenté de plusieurs façons : photons, ions piégés ou circuits supraconducteurs. 
              Pour visualiser ses états, on utilise la <strong className="text-cyan-400">sphère de Bloch</strong>.
            </p>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-cyan-400 mb-4">Implémentations Physiques</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">•</span>
                  <div>
                    <strong className="text-cyan-400">Photons</strong>
                    <p className="text-gray-400 text-sm">Polarisation de particules de lumière</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">•</span>
                  <div>
                    <strong className="text-cyan-400">Ions piégés</strong>
                    <p className="text-gray-400 text-sm">Atomes chargés maintenus par champs électromagnétiques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400">•</span>
                  <div>
                    <strong className="text-cyan-400">Circuits supraconducteurs</strong>
                    <p className="text-gray-400 text-sm">Utilisés par IBM et Google</p>
                  </div>
                </div>
              </div>
            </div>

            <ImagePlaceholder 
              title="Sphère de Bloch" 
              description="Insérer une représentation 3D de la sphère de Bloch montrant |0⟩, |1⟩ et états intermédiaires"
            />

            <p className="text-gray-400 text-sm mt-4">
              Cette représentation géométrique permet de comprendre les transformations appliquées au qubit lors d'opérations quantiques.
            </p>
          </Section>

          <Section title="4. Qubit et Probabilités">
            <p className="text-gray-300 leading-relaxed mb-4">
              Les probabilités sont au cœur du comportement quantique. Lorsqu'un qubit est mesuré, il prend la valeur 0 ou 1 
              avec une certaine probabilité.
            </p>

            <div className="bg-cyan-500/10 border border-cyan-500/30 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-cyan-400 mb-3">Nature Probabiliste</h4>
              <p className="text-gray-300 mb-4">
                Ces probabilités reflètent la nature intrinsèquement incertaine des phénomènes quantiques. 
                L'information contenue dans un qubit est définie par une distribution de probabilités, et non par une valeur fixe.
              </p>
              <div className="bg-gray-950 p-4 rounded border border-cyan-500/30">
                <p className="text-cyan-400 text-sm font-mono text-center">
                  P(0) = |α|² &nbsp;&nbsp;&nbsp; P(1) = |β|²
                </p>
              </div>
            </div>

            <ImagePlaceholder 
              title="Distribution de Probabilités d'un Qubit" 
              description="Insérer un graphique montrant les probabilités de mesure pour différents états"
            />
          </Section>

          <Section title="5. Qubit et Sécurité Informatique">
            <p className="text-gray-300 leading-relaxed mb-6">
              Les propriétés du qubit sont exploitées dans la <strong className="text-green-400">cryptographie quantique</strong> 
              pour garantir des communications totalement sécurisées.
            </p>

            <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-green-400 mb-3">Protocole BB84</h4>
              <p className="text-gray-300 mb-4">
                Le protocole BB84 utilise des qubits pour échanger des clés de chiffrement de manière à ce que toute tentative 
                d'interception soit immédiatement détectable.
              </p>
              <p className="text-gray-400 text-sm">
                L'information quantique permet donc d'assurer une sécurité basée sur les lois fondamentales de la nature, 
                et non sur la puissance de calcul.
              </p>
            </div>

            <ImagePlaceholder 
              title="Protocole BB84 avec Qubits" 
              description="Insérer un schéma du protocole BB84 montrant Alice, Bob et les états de qubits"
            />
          </Section>

          <Section title="Conclusion">
            <p className="text-gray-300 leading-relaxed">
              Le qubit incarne une nouvelle ère de l'information. En fusionnant la physique et l'informatique, 
              il redéfinit notre façon de comprendre, traiter et sécuriser les données. Même si les technologies 
              associées sont encore en développement, l'information quantique offre un potentiel immense pour la 
              recherche scientifique et la cybersécurité du futur.
            </p>
          </Section>
        </div>
      </div>
    );
  }

  // ==================== PAGE MENACES ====================
  if (currentPage === 'menaces') {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b-2 border-red-500 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 mb-6 text-red-400 hover:text-red-300 transition-colors">
              <ArrowLeft size={20} /> Retour à l'accueil
            </button>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Les Menaces Quantiques sur la Cryptographie Classique
            </h1>
            <p className="text-lg text-gray-400">Par <span className="text-red-400 font-semibold">Imane BAOUCHI</span></p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Section title="Introduction">
            <p className="text-gray-300 leading-relaxed mb-4">
              Depuis plusieurs décennies, la cryptographie classique repose sur des principes mathématiques solides, 
              considérés comme pratiquement impossibles à casser par des ordinateurs traditionnels. Les systèmes tels que 
              <strong className="text-red-400"> RSA</strong>, <strong className="text-red-400">Diffie-Hellman</strong> ou 
              <strong className="text-red-400"> ECC</strong> fondent leur sécurité sur la complexité du calcul.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cependant, avec l'apparition de l'informatique quantique, cette confiance est remise en cause. 
              L'<strong className="text-red-400">algorithme de Shor (1994)</strong> est le plus emblématique car il remet 
              directement en question la sécurité du chiffrement RSA.
            </p>
          </Section>

          <Section title="1. L'Algorithme de Shor (1994)">
            <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-red-400 mb-3">Objectif de l'algorithme</h4>
              <p className="text-gray-300 mb-4">
                Shor a montré qu'un ordinateur quantique pouvait factoriser un grand nombre N en un temps polynomial, 
                alors que les ordinateurs classiques nécessitent un temps exponentiel.
              </p>
              <div className="bg-gray-950 p-4 rounded font-mono text-sm text-center text-cyan-400 border border-cyan-500/30 mb-4">
                Si N = p × q, trouver p et q est extrêmement difficile classiquement
              </div>
              <p className="text-gray-400 text-sm">
                Shor exploite un principe mathématique : la périodicité de la fonction f(x) = a<sup>x</sup> mod N
              </p>
            </div>

            <ImagePlaceholder 
              title="Organigramme de l'Algorithme de Shor" 
              description="Insérer Figure 1 du PDF : Organigramme complet de l'algorithme"
            />

            <h4 className="font-bold text-gray-300 mb-3 mt-8">Exemple concret : N = 15, a = 2</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-gray-800 rounded-lg shadow-xl border border-gray-700">
                <thead className="bg-gray-900">
                  <tr>
                    <th className="px-4 py-3 text-cyan-400">x</th>
                    <th className="px-4 py-3 text-cyan-400">f(x) = 2<sup>x</sup> mod 15</th>
                    <th className="px-4 py-3 text-cyan-400">État global</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="px-4 py-2 text-center text-gray-300">0</td>
                    <td className="px-4 py-2 text-center text-gray-300">1</td>
                    <td className="px-4 py-2 text-center text-gray-300">|0⟩|1⟩</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-850">
                    <td className="px-4 py-2 text-center text-gray-300">1</td>
                    <td className="px-4 py-2 text-center text-gray-300">2</td>
                    <td className="px-4 py-2 text-center text-gray-300">|1⟩|2⟩</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="px-4 py-2 text-center text-gray-300">2</td>
                    <td className="px-4 py-2 text-center text-gray-300">4</td>
                    <td className="px-4 py-2 text-center text-gray-300">|2⟩|4⟩</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-850">
                    <td className="px-4 py-2 text-center text-gray-300">3</td>
                    <td className="px-4 py-2 text-center text-gray-300">8</td>
                    <td className="px-4 py-2 text-center text-gray-300">|3⟩|8⟩</td>
                  </tr>
                  <tr className="bg-yellow-500/20 border border-yellow-500/50 font-bold">
                    <td className="px-4 py-2 text-center text-yellow-400">4</td>
                    <td className="px-4 py-2 text-center text-yellow-400">1</td>
                    <td className="px-4 py-2 text-center text-yellow-400">|4⟩|1⟩ (période r=4)</td>
                  </tr>
                  <tr className="border-b border-gray-700 bg-gray-850">
                    <td className="px-4 py-2 text-center text-gray-300">5</td>
                    <td className="px-4 py-2 text-center text-gray-300">2</td>
                    <td className="px-4 py-2 text-center text-gray-300">|5⟩|2⟩</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded mb-6">
              <p className="text-gray-300">
                <strong className="text-yellow-400">Résultat :</strong> La période r = 4 (la fonction se répète tous les 4 pas)
              </p>
              <p className="text-gray-400 text-sm mt-2">
                pgcd(2²-1, 15) = pgcd(3, 15) = 3 et pgcd(2²+1, 15) = pgcd(5, 15) = 5 ✓
              </p>
            </div>

            <ImagePlaceholder 
              title="Circuit Quantique pour l'Exponentiation Modulaire" 
              description="Insérer Figure 2 du PDF : Circuit avec portes Hadamard et blocs contrôlés"
            />

            <div className="bg-cyan-500/10 border border-cyan-500/30 p-6 rounded-lg mt-6">
              <h4 className="font-semibold mb-3 text-cyan-400">Transformée de Fourier Quantique (QFT)</h4>
              <p className="text-gray-300 mb-4">
                La QFT est utilisée pour détecter la périodicité cachée de la fonction f(x). Elle transforme un état quantique 
                en une somme d'états pondérés créant des interférences constructives ou destructives.
              </p>
              <div className="bg-gray-950 p-4 rounded border border-cyan-500/30 font-mono text-sm text-cyan-400 text-center">
                QFT(|x⟩) = (1/√N) ∑<sub>k=0</sub><sup>N-1</sup> e<sup>2πixk/N</sup> |k⟩
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Les pics d'amplitude révèlent les multiples de la période r, permettant de déduire les facteurs.
              </p>
            </div>

            <ImagePlaceholder 
              title="Circuit Complet de l'Algorithme de Shor" 
              description="Insérer Figure 3 du PDF : Circuit complet avec QFT incluse"
            />
          </Section>

          <Section title="2. L'Équation de Mosca (2018)">
            <p className="text-gray-300 mb-6">
              En 2018, Michele Mosca a mis en lumière la dimension stratégique du risque quantique avec le concept 
              <strong className="text-orange-400"> "Harvest Now, Decrypt Later"</strong> : les données chiffrées aujourd'hui 
              peuvent être enregistrées puis déchiffrées plus tard quand la technologie sera prête.
            </p>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 p-8 rounded-xl mb-6">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-orange-400 mb-4">X + Y &gt; Z</div>
                <div className="grid md:grid-cols-3 gap-4 text-sm mt-6">
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <div className="font-bold text-orange-400 mb-1">X : Migration</div>
                    <div className="text-gray-400 text-xs">Temps de migration vers crypto sûre (ex: 10 ans)</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <div className="font-bold text-orange-400 mb-1">Y : Confidentialité</div>
                    <div className="text-gray-400 text-xs">Durée de vie des données sensibles (ex: 20 ans)</div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                    <div className="font-bold text-orange-400 mb-1">Z : Quantum</div>
                    <div className="text-gray-400 text-xs">Temps avant ordinateur quantique (ex: 25 ans)</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mt-6">
                <h4 className="font-bold mb-4 text-center text-orange-400">Timeline du Risque Stratégique</h4>
                <div className="relative mb-8">
                  <div className="flex justify-between text-xs font-semibold mb-2 text-gray-400">
                    <span>2025</span><span>2035</span><span>2045</span><span>2050</span>
                  </div>
                  <div className="h-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 rounded flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">⚠️ ZONE DE DANGER</span>
                  </div>
                </div>
                <p className="text-sm text-center text-red-400 font-bold">
                  X + Y = 30 ans &gt; Z = 25 ans → RISQUE CRITIQUE
                </p>
                <p className="text-xs text-gray-400 text-center mt-3">
                  Les données capturées en 2025 seront cassées AVANT la fin de la migration !
                </p>
              </div>
            </div>

            <ImagePlaceholder 
              title="Timeline de Mosca - Fenêtre de Risque Stratégique" 
              description="Insérer Figure 4 du PDF : Diagramme temporel avec zones de migration et shelf-life"
            />

            <ImagePlaceholder 
              title="Diagramme du Risque Stratégique selon Mosca" 
              description="Insérer Figure 5 du PDF : Graphique avec zones bleue (shelf-life), orange (migration) et blanche (Q-Day)"
            />

            <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded mt-6">
              <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                <AlertTriangle size={20} /> "Harvest Now, Decrypt Later"
              </h4>
              <p className="text-gray-300 mb-3">
                Les attaquants enregistrent dès <strong>MAINTENANT</strong> les communications sensibles 
                d'aujourd'hui en vue de les déchiffrer demain avec des ordinateurs quantiques.
              </p>
              <p className="text-red-400 font-semibold">
                Cette menace est DÉJÀ ACTIVE et impose une urgence immédiate.
              </p>
            </div>
          </Section>

          <Section title="Conclusion">
            <p className="text-gray-300 leading-relaxed">
              Les ordinateurs quantiques représentent une révolution scientifique et technologique, mais aussi une menace 
              majeure pour la cryptographie classique. Grâce à l'algorithme de Shor, ils peuvent briser les fondements 
              mathématiques des systèmes RSA ou Diffie-Hellman. Les travaux de Mosca montrent que cette menace n'est pas 
              théorique mais bien pratique et stratégique. La migration vers des systèmes cryptographiques résistants aux 
              attaques quantiques ne peut plus être repoussée.
            </p>
          </Section>
        </div>
      </div>
    );
  }

  // PAGE CRYPTO QUANTIQUE
  if (currentPage === 'crypto-quantique') {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b-2 border-green-500 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 mb-6 text-green-400 hover:text-green-300 transition-colors">
              <ArrowLeft size={20} /> Retour à l'accueil
            </button>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              La Cryptographie Quantique
            </h1>
            <p className="text-lg text-gray-400">Par <span className="text-green-400 font-semibold">Meriem Djellid</span></p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Section title="Introduction">
            <p className="text-gray-300 leading-relaxed mb-4">
              Avec la croissance rapide des échanges numériques, la <strong className="text-green-400">sécurité de l'information</strong> est devenue un enjeu majeur. 
              La cryptographie, science du secret, protège les communications en rendant les données illisibles pour toute personne non autorisée.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Les systèmes classiques (RSA, AES, ECC) reposent sur des problèmes mathématiques complexes. Cependant, l'arrivée des ordinateurs quantiques 
              menace ces méthodes. Pour faire face à ce danger, une nouvelle approche est apparue : la <strong className="text-green-400">cryptographie quantique</strong>, 
              qui ne dépend pas de la difficulté d'un calcul, mais des <strong>lois fondamentales de la physique quantique</strong>.
            </p>
          </Section>

          <Section title="1. La Théorie de l'Information de Claude Shannon">
            <p className="text-gray-300 mb-4">
              En 1948, <strong className="text-cyan-400">Claude Shannon</strong> publie <em>A Mathematical Theory of Communication</em>, 
              posant les bases de la théorie de l'information.
            </p>

            <div className="bg-cyan-500/10 border border-cyan-500/30 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-cyan-400 mb-3">Équation fondamentale de Shannon</h4>
              <div className="bg-gray-950 p-4 rounded font-mono text-center text-cyan-400 border border-cyan-500/30 mb-4">
                H(X) = -∑ p<sub>i</sub> log₂(p<sub>i</sub>)
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div>
                  <strong className="text-cyan-400">H(X)</strong> : Entropie (quantité moyenne d'information)
                </div>
                <div>
                  <strong className="text-cyan-400">p<sub>i</sub></strong> : Probabilité d'apparition du symbole i
                </div>
                <div>
                  <strong className="text-cyan-400">log₂</strong> : Logarithme en base 2 (unité : le bit)
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Plus les probabilités sont équilibrées, plus H(X) est grande. Une source totalement aléatoire transmet le maximum d'information.
              </p>
            </div>

            <ImagePlaceholder 
              title="Théorie de l'Information - Concept d'Entropie" 
              description="Insérer un graphique illustrant la relation entre probabilités et entropie"
            />

            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded">
              <h4 className="font-semibold text-green-400 mb-2">Vers la cryptographie quantique</h4>
              <p className="text-gray-300 text-sm">
                La cryptographie quantique est la continuation naturelle de la théorie de Shannon. Elle ne cherche plus seulement 
                à <em>simuler</em> l'aléa mathématique, mais à le <em>produire physiquement</em> grâce aux lois de la physique quantique.
              </p>
            </div>
          </Section>

          <Section title="2. Le Photon : Support de l'Information Quantique">
            <p className="text-gray-300 mb-4">
              Le <strong className="text-green-400">photon</strong> est la particule élémentaire de la lumière. Il possède une propriété 
              appelée <strong>polarisation</strong>, qui indique la direction de vibration du champ lumineux.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-3">Base Rectiligne (+)</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>→ Horizontal (0°) = bit 0</li>
                  <li>↑ Vertical (90°) = bit 1</li>
                </ul>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-purple-400 mb-3">Base Diagonale (×)</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>↗ Diagonale (45°) = bit 0</li>
                  <li>↘ Anti-diagonale (135°) = bit 1</li>
                </ul>
              </div>
            </div>

            <ImagePlaceholder 
              title="Bases de Polarisation des Photons" 
              description="Insérer un schéma montrant les 4 directions de polarisation utilisées en BB84"
            />

            <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded mt-6">
              <h4 className="font-semibold text-yellow-400 mb-2">Propriété essentielle à la sécurité</h4>
              <p className="text-gray-300 text-sm">
                Si quelqu'un tente de mesurer le photon avec la mauvaise base, son état change de manière aléatoire. 
                Cette perturbation introduit des <strong>erreurs détectables</strong>, créant du bruit dans le canal qui devient un 
                <strong> indicateur de sécurité</strong>.
              </p>
            </div>
          </Section>

          <Section title="3. Le Protocole BB84 (1984)">
            <p className="text-gray-300 mb-6">
              Le <strong className="text-green-400">protocole BB84</strong>, proposé par Charles Bennett et Gilles Brassard en 1984, 
              est le premier protocole de Distribution Quantique de Clé (QKD).
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-semibold text-blue-400 mb-2">Étape 1 : Émission (Alice)</h4>
                <p className="text-gray-300 text-sm">
                  Alice génère des bits aléatoires et choisit une base de polarisation (rectiligne ou diagonale) pour chaque photon.
                </p>
              </div>

              <div className="bg-purple-500/10 border-l-4 border-purple-500 p-4 rounded">
                <h4 className="font-semibold text-purple-400 mb-2">Étape 2 : Réception (Bob)</h4>
                <p className="text-gray-300 text-sm">
                  Bob mesure chaque photon avec une base également choisie au hasard. Si sa base correspond à celle d'Alice, 
                  il obtient le bon bit. Sinon, le résultat est incertain (50% de chances).
                </p>
              </div>

              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded">
                <h4 className="font-semibold text-yellow-400 mb-2">Étape 3 : Comparaison publique</h4>
                <p className="text-gray-300 text-sm">
                  Alice et Bob utilisent un canal classique pour comparer les bases utilisées (mais jamais les bits). 
                  Ils ne gardent que les bits où leurs bases sont identiques : cela forme la clé brute.
                </p>
              </div>

              <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded">
                <h4 className="font-semibold text-green-400 mb-2">Étape 4 : Vérification</h4>
                <p className="text-gray-300 text-sm">
                  Ils comparent une petite partie de cette clé pour vérifier le taux d'erreur. S'il est faible, la clé est jugée sûre. 
                  S'il est élevé, cela révèle une tentative d'espionnage et la clé est rejetée.
                </p>
              </div>
            </div>

            <ImagePlaceholder 
              title="Protocole BB84 - Schéma Complet" 
              description="Insérer un diagramme montrant les échanges entre Alice et Bob avec les différentes étapes"
            />

            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30 p-6 rounded-lg mt-6">
              <h4 className="font-bold text-green-400 mb-3 text-center">Information Mutuelle et Sécurité</h4>
              <div className="bg-gray-950 p-4 rounded border border-cyan-500/30 font-mono text-center text-cyan-400 mb-4">
                I(X;Y) = H(X) - H(X|Y)
              </div>
              <p className="text-gray-300 text-sm text-center">
                Si Eve espionne, l'information mutuelle I(Alice;Eve) est détectée par le bruit. 
                Quand le protocole fonctionne, <strong className="text-green-400">I(Alice;Eve) ≈ 0</strong>.
              </p>
            </div>
          </Section>

          <Section title="Conclusion">
            <p className="text-gray-300 leading-relaxed">
              La <strong className="text-green-400">cryptographie quantique</strong> réalise dans le monde réel les concepts de Shannon : 
              l'entropie maximale garantit l'imprévisibilité des clés, le bruit du canal devient un indicateur de sécurité, 
              et l'information mutuelle entre l'espion et la clé est presque nulle. En unissant la physique quantique et la théorie 
              de l'information, elle ne repose plus sur la puissance de calcul, mais sur les <strong>lois fondamentales de la nature</strong>, 
              marquant une étape essentielle vers une cybersécurité absolue.
            </p>
          </Section>
        </div>
      </div>
    );
  }

  // PAGE POST-QUANTIQUE
  if (currentPage === 'post-quantique') {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b-2 border-purple-500 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 mb-6 text-purple-400 hover:text-purple-300 transition-colors">
              <ArrowLeft size={20} /> Retour à l'accueil
            </button>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Les Solutions Post-Quantiques et les Perspectives
            </h1>
            <p className="text-lg text-gray-400">Par <span className="text-purple-400 font-semibold">Razane Siguerdidjane</span></p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Section title="Introduction">
            <p className="text-gray-300 leading-relaxed mb-4">
              Dans la théorie de l'information, la cryptographie contrôle la quantité d'information accessible à un adversaire, 
              assurant confidentialité et intégrité. L'arrivée de l'informatique quantique remet en cause cette sécurité : 
              des algorithmes comme celui de <strong className="text-red-400">Shor</strong> peuvent briser RSA ou les courbes elliptiques.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Pour y répondre, la <strong className="text-purple-400">cryptographie post-quantique (PQC)</strong>, selon l'ENISA (2022), 
              conçoit des systèmes résistants aux attaques quantiques tout en restant compatibles avec les ordinateurs classiques. 
              Elle vise à préserver l'<strong className="text-cyan-400">entropie</strong> (l'incertitude) des clés et donc la sécurité 
              informationnelle face à des capacités de calcul accrues.
            </p>
          </Section>

          <Section title="1. Fondements Informationnels de la PQC">
            <p className="text-gray-300 mb-6">
              En théorie de l'information, la sécurité d'un système cryptographique se mesure par l'incertitude (ou entropie) 
              que conserve la clé face à un adversaire. L'informatique quantique remet en cause cet équilibre en augmentant 
              la puissance de calcul disponible.
            </p>

            <div className="bg-purple-500/10 border border-purple-500/30 p-6 rounded-lg">
              <h4 className="font-bold text-purple-400 mb-3">Objectif de la PQC</h4>
              <p className="text-gray-300 mb-4">
                La cryptographie post-quantique vise à préserver l'incertitude en s'appuyant sur des problèmes mathématiques 
                dont la résolution reste difficile, même pour un ordinateur quantique.
              </p>
              <p className="text-gray-400 text-sm">
                Elle prolonge ainsi la logique informationnelle de la cryptographie classique, en maintenant la quantité 
                d'information exploitable par un attaquant à un niveau négligeable.
              </p>
            </div>
          </Section>

          <Section title="2. Principales Familles de Solutions Post-Quantiques">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Lattice-based */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 p-6 rounded-lg hover:border-blue-500 transition-colors">
                <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2 text-xl">
                  🔷 Cryptographie basée sur les Réseaux
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Repose sur la difficulté de résoudre le <strong className="text-blue-400">Shortest Vector Problem (SVP)</strong> 
                  dans des espaces vectoriels multidimensionnels.
                </p>
                <div className="bg-gray-900 p-4 rounded border border-gray-700 mb-3">
                  <p className="text-cyan-400 font-semibold mb-2">Algorithmes principaux :</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• CRYSTALS-Kyber (chiffrement)</li>
                    <li>• CRYSTALS-Dilithium (signature)</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
                    ✅ Standardisé NIST 2022
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-3">
                  L'ENISA considère cette famille comme <strong>la plus prometteuse</strong>
                </p>
              </div>

              {/* Code-based */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 p-6 rounded-lg hover:border-green-500 transition-colors">
                <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2 text-xl">
                  📊 Cryptographie basée sur les Codes
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Inspirée de la théorie de Shannon, exploite la difficulté de décoder un message bruité sans connaître 
                  la structure du code.
                </p>
                <div className="bg-gray-900 p-4 rounded border border-gray-700 mb-3">
                  <p className="text-green-400 font-semibold mb-2">Algorithme principal :</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Classic McEliece</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
                    ✅ Basé sur Shannon
                  </span>
                </div>
                <p className="text-yellow-400 text-xs mt-3">
                  ⚠️ Clés de grande taille (inconvénient)
                </p>
              </div>

              {/* Hash-based */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30 p-6 rounded-lg hover:border-yellow-500 transition-colors">
                <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2 text-xl">
                  #️⃣ Cryptographie basée sur le Hachage
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Utilise des fonctions à sens unique où retrouver le message à partir de son empreinte est impossible.
                </p>
                <div className="bg-gray-900 p-4 rounded border border-gray-700 mb-3">
                  <p className="text-yellow-400 font-semibold mb-2">Algorithme principal :</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• SPHINCS+ (signatures)</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
                    ✅ Standardisé NIST
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-3">
                  Le hachage réduit l'information disponible pour un attaquant
                </p>
              </div>

              {/* Isogeny-based */}
              <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border-2 border-red-500/30 p-6 rounded-lg hover:border-red-500 transition-colors">
                <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2 text-xl">
                  🔀 Cryptographie basée sur les Isogénies
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Exploite les relations mathématiques entre courbes elliptiques supersingulières.
                </p>
                <div className="bg-gray-900 p-4 rounded border border-gray-700 mb-3">
                  <p className="text-red-400 font-semibold mb-2">Statut actuel :</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• SIKE compromis en 2022</li>
                    <li>• Recherche en cours</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30">
                    ⚠️ Vulnérable
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-3">
                  Avantage : Clés très compactes
                </p>
              </div>
            </div>

            <ImagePlaceholder 
              title="Comparaison des Familles d'Algorithmes Post-Quantiques" 
              description="Insérer un tableau comparatif : Lattice vs Codes vs Hash vs Isogénies"
            />
          </Section>

          <Section title="3. Perspectives et Préparation à la Transition">
            <p className="text-gray-300 mb-6">
              L'ENISA (2022) souligne que la migration vers la cryptographie post-quantique est un processus 
              <strong className="text-orange-400"> long et stratégique</strong>. Les organisations doivent évaluer leurs 
              infrastructures et adopter des solutions <strong className="text-purple-400">crypto-agiles</strong>.
            </p>

            <div className="space-y-6">
              {/* Crypto-Agile */}
              <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-3">1. Approche Crypto-Agile</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Capacité à remplacer rapidement un algorithme compromis sans modifier tout le système. 
                  Cette flexibilité est essentielle face à l'évolution rapide des menaces quantiques.
                </p>
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <p className="text-cyan-400 text-sm">
                    Les systèmes doivent être conçus pour accepter plusieurs algorithmes cryptographiques simultanément.
                  </p>
                </div>
              </div>

              {/* Solutions Hybrides */}
              <div className="bg-purple-500/10 border border-purple-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-purple-400 mb-3">2. Solutions Hybrides</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Combinaison d'algorithmes classiques (RSA/ECC) + post-quantiques pour renforcer la sécurité immédiatement.
                </p>
                <div className="bg-gray-900 p-4 rounded border border-gray-700 font-mono text-center text-purple-400">
                  Sécurité = MIN(Classique, Post-Quantique)
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  Tant que l'un des deux algorithmes reste sécurisé, la communication l'est aussi.
                </p>
              </div>

              {/* Objectifs ENISA */}
              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-green-400 mb-3">3. Objectifs de Transition (ENISA 2022)</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">→</span>
                    <div>
                      <strong className="text-green-400">Confidentialité :</strong>
                      <span className="text-gray-300"> Minimiser l'information accessible même avec capacités quantiques</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">→</span>
                    <div>
                      <strong className="text-green-400">Intégrité :</strong>
                      <span className="text-gray-300"> Assurer que toute modification d'un message puisse être détectée</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-bold">→</span>
                    <div>
                      <strong className="text-green-400">Disponibilité :</strong>
                      <span className="text-gray-300"> Garantir que la sécurité ne se fasse pas au détriment de la performance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ImagePlaceholder 
              title="Timeline de Migration vers la Cryptographie Post-Quantique" 
              description="Insérer un schéma montrant les étapes de transition : évaluation, tests, déploiement"
            />
          </Section>

          <Section title="Conclusion">
            <p className="text-gray-300 leading-relaxed mb-4">
              La cryptographie post-quantique s'inscrit pleinement dans la logique de la théorie de l'information : 
              elle vise à maintenir un haut niveau d'incertitude pour tout attaquant, garantissant ainsi la sécurité des échanges.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Face à l'évolution rapide de la puissance de calcul quantique, elle représente une réponse informationnelle 
              plutôt que technologique : il s'agit de rééquilibrer la quantité d'information détenue par les défenseurs et les attaquants.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Les travaux de l'ENISA (2022) montrent que cette transition est déjà amorcée, mais nécessitera une coordination mondiale, 
              une standardisation et une sensibilisation accrue. Les années à venir verront ainsi la cryptographie post-quantique devenir 
              la nouvelle base de la sécurité informationnelle, assurant la <strong className="text-purple-400">confidentialité durable 
              des données à l'ère quantique</strong>.
            </p>
          </Section>
        </div>
      </div>
    );
  }

  // PAGE VIE PRIVÉE
  if (currentPage === 'vie-privee') {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b-2 border-orange-500 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 mb-6 text-orange-400 hover:text-orange-300 transition-colors">
              <ArrowLeft size={20} /> Retour à l'accueil
            </button>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Les Impacts de l'Information Quantique sur la Vie Privée et les Données
            </h1>
            <p className="text-lg text-gray-400">Par <span className="text-orange-400 font-semibold">Alaa Madaoui</span></p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Section title="Introduction">
            <p className="text-gray-300 leading-relaxed mb-4">
              L'information quantique marque le début d'une nouvelle ère dans l'histoire du calcul et de la technologie. 
              En exploitant les lois de la mécanique quantique, cette discipline promet une puissance de traitement capable 
              de résoudre en quelques secondes des problèmes qui prendraient des siècles aux ordinateurs classiques.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cependant, cette même puissance représente une <strong className="text-red-400">menace pour la cybersécurité 
              et la protection de la vie privée</strong>. Ce chapitre analyse les fondements de l'information quantique, 
              ses impacts sur la sécurité des données, et les risques qu'elle fait peser sur la confidentialité des informations personnelles.
            </p>
          </Section>

          <Section title="1. La Confidentialité en Danger">
            <p className="text-gray-300 mb-6">
              L'un des risques majeurs de l'information quantique réside dans sa capacité à casser les systèmes de chiffrement 
              protégeant nos communications et nos fichiers personnels.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-lg">
                <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                  📧 Communications
                </h4>
                <p className="text-gray-300 text-sm">
                  Les courriels, messageries instantanées, appels vidéo et échanges chiffrés deviennent vulnérables 
                  aux attaques quantiques.
                </p>
              </div>

              <div className="bg-orange-500/10 border-l-4 border-orange-500 p-6 rounded-lg">
                <h4 className="font-bold text-orange-400 mb-3 flex items-center gap-2">
                  🏥 Données Médicales
                </h4>
                <p className="text-gray-300 text-sm">
                  Dossiers patients, résultats d'analyses, informations génétiques et historiques médicaux exposés.
                </p>
              </div>

              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                  💳 Informations Bancaires
                </h4>
                <p className="text-gray-300 text-sm">
                  Transactions financières, numéros de carte, comptes bancaires et données de paiement compromis.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
              <p className="text-gray-300 leading-relaxed">
                La rupture de RSA/ECC rendrait accessibles <strong className="text-red-400">toutes les communications chiffrées</strong> 
                interceptées ces dernières années. Les secrets industriels, données gouvernementales et informations personnelles 
                seraient exposés <strong>rétroactivement</strong>.
              </p>
            </div>

            <ImagePlaceholder 
              title="Types de Données Menacées par le Quantique" 
              description="Insérer une infographie montrant les différents types de données vulnérables"
            />
          </Section>

          <Section title="2. Conséquences Sociales et Économiques">
            <p className="text-gray-300 mb-6">
              La perte de confidentialité entraînerait une crise de confiance dans les technologies numériques, 
              avec des répercussions majeures sur plusieurs secteurs.
            </p>

            <div className="space-y-6">
              {/* Secteur Économique */}
              <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                  💼 Secteur Économique
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Perte de secrets industriels et propriété intellectuelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Crise de confiance dans le e-commerce et les plateformes numériques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Coûts massifs de migration des infrastructures cryptographiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Exposition des stratégies commerciales et données clients</span>
                  </li>
                </ul>
              </div>

              {/* Secteur Public */}
              <div className="bg-purple-500/10 border border-purple-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-purple-400 mb-3 flex items-center gap-2">
                  🏛️ Secteur Public et Gouvernemental
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Exposition de communications gouvernementales sensibles et diplomatiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Compromission de systèmes de défense nationale et renseignement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Nécessité de révision des cadres juridiques et réglementaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Vulnérabilité des infrastructures critiques (énergie, transport)</span>
                  </li>
                </ul>
              </div>

              {/* Citoyens */}
              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                  👤 Impact sur les Citoyens
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Perte totale de contrôle sur les données personnelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Risque de surveillance de masse facilitée par le déchiffrement rétroactif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Questions éthiques profondes sur les limites de la technologie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Atteinte à la liberté individuelle et à la vie privée numérique</span>
                  </li>
                </ul>
              </div>
            </div>

            <ImagePlaceholder 
              title="Conséquences Socio-Économiques de la Menace Quantique" 
              description="Insérer un diagramme montrant les impacts en cascade sur différents secteurs"
            />
          </Section>

          <Section title="3. Le Rôle de la Réglementation">
            <p className="text-gray-300 mb-6">
              Des institutions comme la <strong className="text-cyan-400">CNIL</strong> (France) et le 
              <strong className="text-cyan-400"> RGPD</strong> (Europe) devront adapter leurs cadres réglementaires 
              pour intégrer les risques quantiques.
            </p>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-cyan-500/30 p-6 rounded-lg mb-6">
              <h4 className="font-bold text-cyan-400 mb-4">Défis Réglementaires</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-blue-400 mb-3">Défis Juridiques :</h5>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Définir la sécurité "raisonnable" à l'ère quantique</li>
                    <li>• Établir obligations de migration pour organisations</li>
                    <li>• Responsabilité en cas de fuite de données</li>
                    <li>• Protection des données stockées à long terme</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-400 mb-3">Défis Technologiques :</h5>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Certification des algorithmes post-quantiques</li>
                    <li>• Normes internationales harmonisées</li>
                    <li>• Audits de sécurité adaptés au quantique</li>
                    <li>• Formation des professionnels</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-lg">
              <h4 className="font-bold text-orange-400 mb-3">Questions Éthiques Profondes</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Jusqu'où la technologie peut-elle aller sans nuire à la liberté individuelle ? 
                La protection de la vie privée ne sera plus seulement une question juridique, 
                mais aussi <strong className="text-orange-400">technologique et scientifique</strong>.
              </p>
            </div>

            <ImagePlaceholder 
              title="Cadre Réglementaire RGPD et Quantique" 
              description="Insérer un schéma montrant l'adaptation du RGPD aux menaces quantiques"
            />
          </Section>

          <Section title="Conclusion">
            <p className="text-gray-300 leading-relaxed">
              L'information quantique constitue une avancée scientifique majeure qui changera profondément notre rapport à la technologie. 
              Mais elle impose également une réflexion sur les limites et les responsabilités associées à son utilisation. Si elle promet 
              d'accélérer la recherche médicale, d'optimiser l'énergie et de révolutionner l'intelligence artificielle, elle menace en 
              parallèle les fondements de la <strong className="text-red-400">sécurité numérique</strong>. Protéger la vie privée et les 
              données personnelles dans l'ère quantique nécessitera des efforts conjoints : innovation, législation, et surtout 
              <strong className="text-orange-400"> anticipation</strong>.
            </p>
          </Section>
        </div>
      </div>
    );
  }

  // PAGE SYNTHÈSE
  if (currentPage === 'synthese') {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 border-b-2 border-indigo-400 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 mb-6 text-indigo-300 hover:text-indigo-200 transition-colors">
              <ArrowLeft size={20} /> Retour à l'accueil
            </button>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Synthèse et Perspectives
            </h1>
            <p className="text-lg text-indigo-200">Vue d'ensemble du projet et avenir de la cybersécurité quantique</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Section title="Synthèse Générale du Projet">
            <p className="text-gray-300 leading-relaxed mb-6">
              Ce projet de recherche académique a exploré les multiples facettes de l'<strong className="text-cyan-400">information quantique</strong> 
              et son impact révolutionnaire sur la cybersécurité. À travers cinq axes complémentaires, nous avons analysé à la fois les 
              <strong className="text-red-400"> menaces</strong> et les <strong className="text-green-400">solutions</strong> que cette 
              nouvelle ère technologique apporte.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-cyan-400 mb-3 flex items-center gap-2">
                  <BookOpen size={20} /> Fondements Quantiques
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  <strong className="text-cyan-400">Hicham Abdelkadous</strong> a posé les bases théoriques en explorant le qubit, 
                  la superposition et l'intrication quantique.
                </p>
                <p className="text-gray-400 text-xs">
                  Contribution clé : Comprendre comment 300 qubits peuvent dépasser toute puissance de calcul classique.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                  <AlertTriangle size={20} /> Menaces Identifiées
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  <strong className="text-red-400">Imane BAOUCHI</strong> a démontré comment l'algorithme de Shor menace RSA, 
                  et l'urgence révélée par l'équation de Mosca.
                </p>
                <p className="text-gray-400 text-xs">
                  Contribution clé : "Harvest Now, Decrypt Later" - la menace est déjà active.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                  <Lock size={20} /> Cryptographie Quantique
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  <strong className="text-green-400">Meriem Djellid</strong> a présenté le protocole BB84 et la sécurité basée 
                  sur les lois de la physique plutôt que sur la complexité mathématique.
                </p>
                <p className="text-gray-400 text-xs">
                  Contribution clé : La théorie de Shannon appliquée au monde quantique.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 p-6 rounded-lg">
                <h4 className="font-bold text-purple-400 mb-3 flex items-center gap-2">
                  <Shield size={20} /> Solutions Post-Quantiques
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  <strong className="text-purple-400">Razane Siguerdidjane</strong> a détaillé les algorithmes résistants 
                  (Kyber, Dilithium, SPHINCS+) et les stratégies de transition.
                </p>
                <p className="text-gray-400 text-xs">
                  Contribution clé : Standards NIST/ENISA et approche crypto-agile.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/30 p-6 rounded-lg md:col-span-2">
                <h4 className="font-bold text-orange-400 mb-3 flex items-center gap-2">
                  <Users size={20} /> Impacts Sociétaux
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  <strong className="text-orange-400">Alaa Madaoui</strong> a analysé les conséquences sur la vie privée, 
                  l'économie et les questions éthiques soulevées par cette révolution.
                </p>
                <p className="text-gray-400 text-xs">
                  Contribution clé : Le rôle crucial de la réglementation (RGPD, CNIL) dans l'ère quantique.
                </p>
              </div>
            </div>
          </Section>

          <Section title="Trois Réponses Complémentaires">
            <div className="space-y-6">
              <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-lg">
                <h4 className="font-bold text-green-400 mb-3 text-xl">🔐 1. Cryptographie Quantique (BB84)</h4>
                <p className="text-gray-300 mb-3">
                  Sécurité basée sur les <strong>lois fondamentales de la physique</strong> : toute tentative d'espionnage 
                  perturbe les photons et est immédiatement détectable.
                </p>
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <p className="text-sm text-gray-400">
                    <strong className="text-green-400">Avantages :</strong> Sécurité inconditionnelle théorique<br/>
                    <strong className="text-yellow-400">Limites :</strong> Infrastructure coûteuse, distance limitée (sans répéteurs)
                  </p>
                </div>
              </div>

              <div className="bg-purple-500/10 border-l-4 border-purple-500 p-6 rounded-lg">
                <h4 className="font-bold text-purple-400 mb-3 text-xl">🛡️ 2. Cryptographie Post-Quantique (PQC)</h4>
                <p className="text-gray-300 mb-3">
                  Algorithmes mathématiques résistants aux ordinateurs quantiques, compatibles avec l'infrastructure actuelle.
                </p>
                <div className="bg-gray-900 p-4 rounded border border-gray-700">
                  <p className="text-sm text-gray-400">
                    <strong className="text-purple-400">Avantages :</strong> Déploiement progressif, pas de nouvelle infrastructure<br/>
                    <strong className="text-yellow-400">Défis :</strong> Clés plus grandes, performance à optimiser
                  </p>
                </div>
              </div>

              <div className="bg-cyan-500/10 border-l-4 border-cyan-500 p-6 rounded-lg">
                <h4 className="font-bold text-cyan-400 mb-3 text-xl">⚡ 3. Solutions Hybrides</h4>
                <p className="text-gray-300 mb-3">
                  Combinaison des deux approches pour une transition en douceur et une sécurité maximale.
                </p>
                <div className="bg-gray-900 p-4 rounded border border-gray-700 font-mono text-center text-cyan-400">
                  Sécurité = MIN(Classique + PQC, Quantique)
                </div>
              </div>
            </div>
          </Section>

          <Section title="L'Urgence d'Agir Maintenant">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-2 border-red-500/30 p-8 rounded-xl mb-6">
              <h4 className="font-bold text-red-400 mb-4 text-xl text-center">⏰ L'Équation de Mosca Rappelle l'Urgence</h4>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-orange-400 mb-2">X + Y &gt; Z</div>
                <p className="text-gray-300 text-sm">
                  La migration (10 ans) + durée de confidentialité (20 ans) = 30 ans<br/>
                  Mais le Q-Day arrive dans 25 ans<br/>
                  <strong className="text-red-400">→ Fenêtre de vulnérabilité de 5 ans !</strong>
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h5 className="font-semibold text-orange-400 mb-3">Actions Immédiates Requises :</h5>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span><strong>2025-2030 :</strong> Évaluation des infrastructures et inventaire des systèmes cryptographiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span><strong>2030-2035 :</strong> Tests et déploiement progressif des algorithmes post-quantiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span><strong>2035-2040 :</strong> Migration complète et certification des systèmes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span><strong>Parallèlement :</strong> Formation des professionnels et sensibilisation du public</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Perspectives d'Avenir">
            <p className="text-gray-300 leading-relaxed mb-6">
              L'avenir de la cybersécurité se situe à la convergence de trois domaines : la physique quantique, 
              les mathématiques post-quantiques, et les sciences sociales pour gérer les implications éthiques et réglementaires.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-500/10 border border-blue-500/30 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">🔬</div>
                <h5 className="font-bold text-blue-400 mb-2">Recherche</h5>
                <p className="text-gray-400 text-sm">
                  Amélioration continue des algorithmes PQC et développement de nouveaux protocoles quantiques
                </p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">🏛️</div>
                <h5 className="font-bold text-purple-400 mb-2">Standardisation</h5>
                <p className="text-gray-400 text-sm">
                  Coordination internationale (NIST, ENISA, ISO) pour harmoniser les standards
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">🎓</div>
                <h5 className="font-bold text-green-400 mb-2">Éducation</h5>
                <p className="text-gray-400 text-sm">
                  Formation des futures générations d'ingénieurs en sécurité quantique
                </p>
              </div>
            </div>

            <ImagePlaceholder 
              title="Feuille de Route de la Transition Quantique 2025-2050" 
              description="Insérer une timeline montrant les étapes de la transition globale vers la sécurité post-quantique"
            />
          </Section>

          <Section title="📚 Bibliographie Complète">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-cyan-400 mb-3 text-lg">Articles Fondateurs</h4>
                <ul className="space-y-3 text-sm">
                  <li className="bg-gray-800 p-4 rounded border border-gray-700">
                    <strong className="text-cyan-400">Shor, P. W. (1994).</strong> 
                    <span className="text-gray-300"> Algorithms for quantum computation: Discrete logarithms and factoring. </span>
                    <em className="text-gray-400">Proceedings of the 35th Annual Symposium on Foundations of Computer Science, 124-134. IEEE.</em>
                  </li>
                  <li className="bg-gray-800 p-4 rounded border border-gray-700">
                    <strong className="text-cyan-400">Mosca, M. (2018).</strong> 
                    <span className="text-gray-300"> Cybersecurity in an Era with Quantum Computers: Will We Be Ready? </span>
                    <em className="text-gray-400">IEEE Security & Privacy, 16(5), 38-41.</em>
                  </li>
                  <li className="bg-gray-800 p-4 rounded border border-gray-700">
                    <strong className="text-cyan-400">Bennett, C. H., & Brassard, G. (1984).</strong> 
                    <span className="text-gray-300"> Quantum cryptography: Public key distribution and coin tossing.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-purple-400 mb-3 text-lg">Ouvrages de Référence</h4>
                <ul className="space-y-3 text-sm">
                  <li className="bg-gray-800 p-4 rounded border border-gray-700">
                    <strong className="text-purple-400">Nielsen, M. A., & Chuang, I. L. (2010).</strong> 
                    <span className="text-gray-300"> Quantum Computation and Quantum Information (10th Anniversary Edition). </span>
                    <em className="text-gray-400">Cambridge University Press.</em>
                  </li>
                  <li className="bg-gray-800 p-4 rounded border border-gray-700">
                    <strong className="text-purple-400">Bernhardt, C. (2019).</strong> 
                    <span className="text-gray-300"> Quantum Computing for Everyone. </span>
                    <em className="text-gray-400">MIT Press.</em>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-green-400 mb-3 text-lg">Institutions et Standards</h4>
                <ul className="space-y-3 text-sm">
                  <li className="bg-gray-800 p-4 rounded border border-gray-700">
                    <strong className="text-green-400">NIST (2023).</strong> 
                    <span className="text-gray-300"> Post-Quantum Cryptography Standardization Project. </span>
                    <em className="text-gray-400">National Institute of Standards and Technology.</em>
                  </li>
                  <li className="bg-gray-800 p-4 rounded border border-gray-700">
                    <strong className="text-green-400">ENISA (2022).</strong> 
                    <span className="text-gray-300"> Post-Quantum Cryptography: Current State and Quantum Readiness. </span>
                    <em className="text-gray-400">European Union Agency for Cybersecurity.</em>
                  </li>
                  <li className="bg-gray-800 p-4 rounded border border-gray-700">
                    <strong className="text-green-400">ANSSI (2023).</strong> 
                    <span className="text-gray-300"> Informatique quantique et cybersécurité: enjeux et préparation.</span>
                  </li>
                  <li className="bg-gray-800 p-4 rounded border border-gray-700">
                    <strong className="text-green-400">CNIL (2024).</strong> 
                    <span className="text-gray-300"> Protection des données à l'ère du quantique.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="Conclusion Finale">
            <div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border-2 border-indigo-500/30 p-8 rounded-xl">
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                L'informatique quantique marque une <strong className="text-cyan-400">révolution scientifique</strong> qui bouleverse 
                les fondements de la cybersécurité. Les travaux de Shor (1994) et Mosca (2018) démontrent que la menace n'est ni 
                théorique ni lointaine : elle est <strong className="text-red-400">stratégique et déjà active</strong>.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                Face à ce défi, la communauté scientifique et les institutions ont développé deux réponses complémentaires : 
                la <strong className="text-green-400">cryptographie quantique</strong> (sécurité physique) et la 
                <strong className="text-purple-400"> cryptographie post-quantique</strong> (sécurité mathématique). 
                Leur combinaison offre une approche hybride robuste pour la transition.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                L'avenir de la sécurité numérique dépend de notre capacité collective à <strong className="text-orange-400">anticiper, 
                innover et coopérer</strong>. Les universités, gouvernements et entreprises doivent s'unir pour préserver la 
                <strong className="text-cyan-400"> confiance numérique</strong> dans un monde où le calcul devient quantique.
              </p>

              <div className="text-center pt-6 border-t border-indigo-500/30">
                <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  L'ère quantique est déjà là.
                </p>
                <p className="text-lg text-indigo-300">
                  La question n'est plus "si" mais "quand" nous serons prêts.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* Footer spécial */}
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 border-t-2 border-cyan-500/30 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-xl mb-4 text-indigo-200">
              <strong className="text-cyan-400">Projet Académique</strong> • Module : Théorie de l'Information et du Codage
            </p>
            <p className="text-sm text-indigo-300 mb-6">
              Université des Sciences et de la Technologie d'Oran Mohamed Boudiaf (USTO-MB)<br/>
              3ème Année Ingénieur en Sécurité Informatique • 2025-2026
            </p>
            <div className="mb-8">
              <p className="text-lg text-indigo-200 mb-4">Contributions :</p>
              <div className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                <div className="bg-cyan-500/10 border border-cyan-500/30 p-3 rounded">
                  <p className="text-cyan-400 font-semibold text-sm">Hicham Abdelkadous</p>
                  <p className="text-xs text-gray-400">Le Qubit</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded">
                  <p className="text-red-400 font-semibold text-sm">Imane BAOUCHI</p>
                  <p className="text-xs text-gray-400">Menaces</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 p-3 rounded">
                  <p className="text-green-400 font-semibold text-sm">Meriem Djellid</p>
                  <p className="text-xs text-gray-400">Crypto Quantique</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 p-3 rounded">
                  <p className="text-purple-400 font-semibold text-sm">Razane Siguerdidjane</p>
                  <p className="text-xs text-gray-400">Post-Quantique</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 p-3 rounded">
                  <p className="text-orange-400 font-semibold text-sm">Alaa Madaoui</p>
                  <p className="text-xs text-gray-400">Vie Privée</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              © 2025-2026 USTO-MB • Tous droits réservés aux auteurs
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return null;
}