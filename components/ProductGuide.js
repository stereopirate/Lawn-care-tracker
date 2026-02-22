// ─── ProductGuide Component ──────────────────────────────────────────────────
// No props required — all data comes from PRODUCT_DATABASE (constants.js).

(function () {
    const { useState } = React;

    window.ProductGuide = () => {
        const [category, setCategory]       = useState('mowers');
        const [mowerType, setMowerType]     = useState('');
        const [brandFilter, setBrandFilter] = useState('');
        const [compareList, setCompareList] = useState([]);
        const [expandedId, setExpandedId]   = useState(null);

        const allProducts = (PRODUCT_DATABASE[category] || []).filter(p => !p.id.includes('-other'));
        const brands = [...new Set(allProducts.map(p => p.brand))].sort();

        let filtered = allProducts;
        if (category === 'mowers' && mowerType) filtered = filtered.filter(p => p.mowerCategory === mowerType);
        if (brandFilter) filtered = filtered.filter(p => p.brand === brandFilter);

        const toggleCompare = (product) => {
            if (compareList.find(p => p.id === product.id)) {
                setCompareList(compareList.filter(p => p.id !== product.id));
            } else if (compareList.length < 3) {
                setCompareList([...compareList, product]);
            }
        };

        const typeLabels = { mowers: 'Mowers', spreaders: 'Spreaders', trimmers: 'Trimmers', fertilizers: 'Fertilizers', seeds: 'Grass Seed' };
        const typeIcons  = { mowers: '🚜', spreaders: '📡', trimmers: '✂️', fertilizers: '🌾', seeds: '🌱' };

        const renderSpec = (label, value) => {
            if (!value) return null;
            return (
                <div className="flex justify-between text-xs py-1 border-b border-gray-100">
                    <span className="text-gray-500">{label}</span>
                    <span className="font-semibold text-gray-800 text-right">{value}</span>
                </div>
            );
        };

        const ProductCard = ({ product }) => {
            const isExpanded = expandedId === product.id;
            const isCompared = !!compareList.find(p => p.id === product.id);
            return (
                <div className={`bg-white rounded-xl shadow border-2 transition ${isCompared ? 'border-[#367C2B]' : 'border-gray-100'}`}>
                    <div className="p-3 cursor-pointer" onClick={() => setExpandedId(isExpanded ? null : product.id)}>
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="text-sm font-bold text-gray-900">{product.name}</div>
                                <div className="text-xs text-[#367C2B] font-semibold">{product.brand}</div>
                                {product.type && <div className="text-xs text-gray-500 mt-0.5">{product.type}</div>}
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={(e) => { e.stopPropagation(); toggleCompare(product); }}
                                    disabled={!isCompared && compareList.length >= 3}
                                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${isCompared ? 'bg-[#367C2B] text-white' : compareList.length >= 3 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-[#367C2B] hover:text-white'}`}
                                >
                                    {isCompared ? '✓ Selected' : '+ Compare'}
                                </button>
                                <span className="text-gray-400 text-xs">{isExpanded ? '▲' : '▼'}</span>
                            </div>
                        </div>
                    </div>
                    {isExpanded && (
                        <div className="px-3 pb-3 border-t border-gray-100 pt-2">
                            {renderSpec('Brand', product.brand)}
                            {product.deck && renderSpec('Deck Size', product.deck)}
                            {product.type && renderSpec('Type', product.type)}
                            {product.features && renderSpec('Features', product.features)}
                            {product.npk && renderSpec('NPK', product.npk)}
                            {product.coverage && renderSpec('Coverage', product.coverage)}
                        </div>
                    )}
                </div>
            );
        };

        return (
            <div>
                <h2 className="text-xl font-bold mb-4">📖 Product Guide</h2>

                {/* Category tabs */}
                <div className="flex gap-1 bg-gray-100 p-1 rounded-lg mb-4 overflow-x-auto">
                    {Object.entries(typeLabels).map(([key, label]) => (
                        <button
                            key={key}
                            onClick={() => { setCategory(key); setMowerType(''); setBrandFilter(''); setCompareList([]); setExpandedId(null); }}
                            className={`flex-shrink-0 py-2 px-3 rounded-md text-xs font-semibold transition ${category === key ? 'bg-[#367C2B] text-white shadow' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            {typeIcons[key]} {label}
                        </button>
                    ))}
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow p-3 mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        {category === 'mowers' && (
                            <div className="flex gap-1">
                                {['', 'Walk Behind', 'Riding', 'Zero Turn'].map(mt => (
                                    <button
                                        key={mt}
                                        onClick={() => { setMowerType(mt); setExpandedId(null); }}
                                        className={`px-2 py-1 rounded text-xs font-semibold ${mowerType === mt ? 'bg-[#367C2B] text-white' : 'bg-gray-100 text-gray-600'}`}
                                    >
                                        {mt || 'All'}
                                    </button>
                                ))}
                            </div>
                        )}
                        <select
                            value={brandFilter}
                            onChange={(e) => { setBrandFilter(e.target.value); setExpandedId(null); }}
                            className="px-2 py-1 border rounded text-xs"
                        >
                            <option value="">All Brands ({brands.length})</option>
                            {brands.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                        <span className="text-xs text-gray-400 ml-auto">{filtered.length} products</span>
                    </div>
                </div>

                {/* Compare bar */}
                {compareList.length > 0 && (
                    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#367C2B] shadow-2xl" style={{animation: 'slideUpBounce 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'}}>
                        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
                            <div className="flex-1 min-w-0">
                                <div className="text-xs text-gray-500 font-semibold">{compareList.length}/3 selected</div>
                                <div className="text-sm font-bold text-gray-800 truncate">{compareList.map(p => p.name).join(' vs ')}</div>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                                <button onClick={() => setCompareList([])} className="px-3 py-2 text-xs font-semibold text-gray-500 border border-gray-300 rounded-lg">Clear</button>
                                {compareList.length >= 2 && (
                                    <button className="px-5 py-2.5 bg-[#FFDE00] text-[#367C2B] rounded-lg text-sm font-extrabold shadow-lg" style={{animation: 'pulseGlow 2s ease-in-out infinite'}}>
                                        Compare Now →
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Product list */}
                <div className={`space-y-2 ${compareList.length > 0 ? 'pb-20' : ''}`}>
                    {filtered.map(product => <ProductCard key={product.id} product={product} />)}
                </div>
                {filtered.length === 0 && (
                    <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
                        No products match the current filters
                    </div>
                )}
            </div>
        );
    };
})();
