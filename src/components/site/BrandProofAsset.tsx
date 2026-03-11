type BrandProofAssetProps = {
  label: string;
  mark: string;
  accentFrom: string;
  accentTo: string;
  note?: string;
  compact?: boolean;
};

const BrandProofAsset = ({ label, mark, accentFrom, accentTo, note, compact = false }: BrandProofAssetProps) => {
  return (
    <div className={`rounded-[24px] border border-slate-100 bg-white ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
      <div className="flex items-center gap-4">
        <div
          className={`flex items-center justify-center rounded-2xl text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] ${compact ? 'size-12 text-sm font-bold' : 'size-14 text-base font-semibold'}`}
          style={{ backgroundImage: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
          aria-hidden="true"
        >
          {mark}
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Proof asset</p>
          <p className="mt-1 text-lg font-semibold text-slate-950">{label}</p>
        </div>
      </div>
      {note ? <p className="mt-4 text-xs leading-6 text-slate-500">{note}</p> : null}
    </div>
  );
};

export default BrandProofAsset;
