import React, { useState } from 'react';
import { analyzeTargetResonance } from '../services/geminiService';
import { AnalysisResult } from '../types';
import { Terminal } from './Terminal';
import { Scan, AlertTriangle, Radio, Loader2, ArrowDownCircle } from 'lucide-react';

export const Analyzer: React.FC = () => {
  const [target, setTarget] = useState('');
  const [sector, setSector] = useState<'CORPORATE' | 'GOVERNMENT'>('CORPORATE');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [logs, setLogs] = useState<string[]>([
    "SISTEMA LISTO...",
    "ESPERANDO PERFIL OBJETIVO..."
  ]);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!target) return;

    setLoading(true);
    setResult(null);
    setLogs([]); // Limpiar logs anteriores

    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

    // Secuencia de simulación
    addLog(`INICIANDO PROTOCOLO DE RASTREO V.4.0...`);
    await delay(700);

    addLog(`ESTABLECIENDO ENLACE CON: ${target.toUpperCase()}...`);
    await delay(800);

    addLog(`ANALIZANDO MÉTRICAS PÚBLICAS...`);
    addLog(`CALCULANDO TASA DE ENGAGEMENT...`);
    await delay(1000);

    addLog(`DETECTANDO PATRONES DE CRECIMIENTO...`);
    await delay(500);

    addLog(`EVALUANDO CALIDAD DE CONTENIDO VISUAL...`);
    addLog(`VERIFICANDO SALUD DEL ALGORITMO...`);
    await delay(1200);

    addLog(`[====================] 100% COMPLETADO`);
    await delay(400);

    try {
      const data = await analyzeTargetResonance(target, sector);
      setResult(data);
      
      // Agregar logs generados por la IA
      data.logs.forEach(l => addLog(l));
      
      await delay(500);
      addLog(`----------------------------------------`);
      addLog(`>> DIAGNÓSTICO DE MARCA COMPLETADO.`);
      addLog(`>> REVISE LAS RECOMENDACIONES ESTRATÉGICAS ABAJO.`);
      addLog(`----------------------------------------`);

    } catch (err) {
      addLog("ERROR CRÍTICO. CONEXIÓN TERMINADA.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-md relative overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-hl-orange"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-hl-orange"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-hl-orange"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-hl-orange"></div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-mono text-hl-orange mb-6 flex items-center gap-2">
            <Scan className="w-6 h-6" />
            ANALIZADOR DE MARCA
          </h2>
          <p className="text-gray-400 mb-6 font-mono text-sm leading-relaxed">
            Ingresa el nombre de usuario de la cuenta que deseas evaluar. Nuestros algoritmos detectarán deficiencias en tu estrategia de contenido y publicidad actual.
          </p>

          <form onSubmit={handleAnalyze} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-hl-orange mb-2 uppercase">Cuenta / Usuario Objetivo</label>
              <input
                type="text"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full bg-black border border-gray-700 p-3 font-mono text-white focus:border-hl-orange focus:outline-none focus:ring-1 focus:ring-hl-orange transition-all"
                placeholder="@usuario"
              />
            </div>

            <div className="flex gap-4">
               <button
                type="button"
                onClick={() => setSector('CORPORATE')}
                className={`flex-1 py-2 text-xs font-mono uppercase border transition-colors ${sector === 'CORPORATE' ? 'bg-hl-orange text-black border-hl-orange' : 'border-gray-700 text-gray-500 hover:border-gray-500'}`}
              >
                Negocio / Pyme
              </button>
              <button
                type="button"
                onClick={() => setSector('GOVERNMENT')}
                className={`flex-1 py-2 text-xs font-mono uppercase border transition-colors ${sector === 'GOVERNMENT' ? 'bg-hl-orange text-black border-hl-orange' : 'border-gray-700 text-gray-500 hover:border-gray-500'}`}
              >
                Inst. Pública / ONG
              </button>
            </div>

            <button
              type="submit"
              disabled={loading || !target}
              className="w-full bg-hl-gray text-white border border-gray-600 hover:border-hl-orange hover:text-hl-orange py-3 font-mono uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Radio className="w-4 h-4" />}
              {loading ? 'Escaneando...' : 'Iniciar Diagnóstico'}
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-4">
            <Terminal logs={logs} />
            
            {result && (
                <div className="border border-hl-orange/30 bg-black/40 p-4 animate-fadeIn">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-hl-orange font-mono text-sm uppercase">Puntuación de Resonancia</span>
                        <span className={`text-xl font-bold font-mono ${result.resonanceScore < 50 ? 'text-red-500' : 'text-green-500'}`}>
                            {result.resonanceScore}/100
                        </span>
                    </div>
                    {result.anomalyDetected && (
                        <div className="flex items-center gap-2 text-red-400 text-xs font-mono mb-2 uppercase border border-red-900/50 bg-red-900/10 p-2">
                            <AlertTriangle className="w-4 h-4" />
                            Estrategia Deficiente Detectada
                        </div>
                    )}
                    <div className="mt-2 mb-4">
                        <span className="text-gray-500 text-xs font-mono uppercase block mb-1">Recomendación Estratégica:</span>
                        <p className="text-gray-300 text-sm font-mono leading-tight">{result.recommendation}</p>
                    </div>

                    <div className="border-t border-gray-800 pt-3 mt-2">
                        <div className="flex items-center gap-3 text-green-500 mb-2">
                             <ArrowDownCircle className="w-5 h-5 animate-bounce" />
                             <span className="font-mono font-bold text-sm uppercase">Solución Disponible</span>
                        </div>
                        <p className="text-gray-400 text-xs font-mono">
                            Hemos identificado el protocolo exacto para corregir estas métricas. Vea los planes abajo.
                        </p>
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};