import React from 'react';
import { BookOpen, GraduationCap, Printer, Volume2, VolumeX, FileCheck, Layers, Award } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface NavbarProps {
  activeTab: 'exam' | 'model_answers' | 'revision';
  setActiveTab: (tab: 'exam' | 'model_answers' | 'revision') => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  soundEnabled,
  setSoundEnabled,
  onPrint
}) => {
  const handleToggleSound = () => {
    const newState = sounds.toggleSound();
    setSoundEnabled(newState);
  };

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 shadow-md sticky top-0 z-40 no-print">
      {/* Top Banner / Ministry Brand */}
      <div className="bg-emerald-800/80 px-4 py-1.5 text-xs text-emerald-100 flex items-center justify-between border-b border-emerald-700/50">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>منهج الشهادة الإعدادية (الصف الثالث الإعدادي) • العام الدراسي ٢٠٢٦ / ٢٠٢٧</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-emerald-200">
          <span>امتحان الفصل الدراسي الأول</span>
          <span>•</span>
          <span className="font-semibold text-white bg-emerald-700/60 px-2 py-0.5 rounded">الوحدات: الأولى والثانية والثالثة</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Logo and Titles */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                امتحان الشهادة الإعدادية ٢٠٢٦/٢٠٢٧
              </h1>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                الوحدات ١، ٢، ٣
              </span>
            </div>
            <p className="text-xs text-slate-400">
              امتحان تفاعلي ونموذج إجابة معتمد مع الشرح وتوزيع الدرجات
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60" aria-label="أقسام المنصة">
          <button
            onClick={() => { sounds.playClick(); setActiveTab('exam'); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'exam'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>الامتحان التفاعلي</span>
          </button>

          <button
            onClick={() => { sounds.playClick(); setActiveTab('model_answers'); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'model_answers'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>نموذج الإجابة والبوكليت</span>
          </button>

          <button
            onClick={() => { sounds.playClick(); setActiveTab('revision'); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'revision'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>ملخص وقوانين الوحدات</span>
          </button>
        </nav>

        {/* Actions (Sound, Print) */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleSound}
            title={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات الصوتية'}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/50"
            aria-label="تبديل الصوت"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          <button
            onClick={onPrint}
            title="طباعة الامتحان ونموذج الإجابة"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-colors border border-slate-700/50"
          >
            <Printer className="w-4 h-4 text-slate-300" />
            <span className="hidden sm:inline">طباعة / PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
