// ─── MyGarage Component ──────────────────────────────────────────────────────
// Props:
//   equipment    – array of equipment objects
//   activities   – array of activity objects (used to calc mower hours)
//   onAdd        – function(equipmentData) adds a new item
//   onDelete     – function(id) removes an item
//   onNavigate   – function(viewKey) navigates to another view (e.g. 'products')
// Globals used: PRODUCT_DATABASE (constants.js)

(function () {
    const { useState } = React;

    window.MyGarage = ({ equipment, activities, onAdd, onDelete, onNavigate }) => {
        const [garageForm, setGarageForm] = useState({
            name: '', type: 'mowers', selectedProduct: '', customName: '', mowerType: ''
        });

        const allProducts = PRODUCT_DATABASE[garageForm.type] || [];
        const currentProducts = (garageForm.type === 'mowers' && garageForm.mowerType)
            ? allProducts.filter(p => p.mowerCategory === garageForm.mowerType || p.id.includes('-other'))
            : allProducts;
        const selectedProductData = currentProducts.find(p => p.id === garageForm.selectedProduct);

        const handleTypeChange = (newType) =>
            setGarageForm({ name: '', type: newType, selectedProduct: '', customName: '', mowerType: '' });

        const handleProductSelect = (productId) => {
            const product = currentProducts.find(p => p.id === productId);
            if (product && !product.id.includes('-other')) {
                setGarageForm({ ...garageForm, selectedProduct: productId, name: product.name, customName: '' });
            } else {
                setGarageForm({ ...garageForm, selectedProduct: productId, name: '', customName: '' });
            }
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const finalName = garageForm.selectedProduct && !garageForm.selectedProduct.includes('-other')
                ? garageForm.name
                : garageForm.customName;
            if (finalName) {
                const productInfo = selectedProductData || {};
                onAdd({
                    name: finalName,
                    type: garageForm.type,
                    brand: productInfo.brand || 'Custom',
                    details: productInfo.features || productInfo.type || '',
                    deck: productInfo.deck || '',
                    maintenanceSchedule: productInfo.maintenanceSchedule || null
                });
                setGarageForm({ name: '', type: garageForm.type, selectedProduct: '', customName: '', mowerType: '' });
            }
        };

        const typeLabels = { mowers: 'Mower', spreaders: 'Spreader', trimmers: 'Trimmer' };

        return (
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">🏠 My Garage</h2>
                    <button
                        onClick={() => onNavigate('products')}
                        className="px-3 py-1 text-xs font-semibold text-[#367C2B] border border-[#367C2B] rounded-lg hover:bg-[#367C2B]/10"
                    >
                        📖 Product Guide
                    </button>
                </div>

                {/* Add equipment form */}
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h3 className="font-bold mb-4">Add Equipment</h3>
                    <form onSubmit={handleSubmit}>
                        {/* Equipment type selector */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Equipment Type</label>
                            <div className="grid grid-cols-3 gap-2">
                                {Object.entries(typeLabels).map(([key, label]) => (
                                    <button
                                        key={key} type="button"
                                        onClick={() => handleTypeChange(key)}
                                        className={`p-3 rounded-lg text-center transition btn-press ${garageForm.type === key ? 'bg-[#367C2B]/10 text-[#367C2B] border-2 border-[#367C2B]' : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#367C2B]'}`}
                                    >
                                        <div className="text-xs font-semibold mt-1">{label}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mower sub-type */}
                        {garageForm.type === 'mowers' && (
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2">Mower Type</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Walk Behind', 'Riding', 'Zero Turn'].map(mt => (
                                        <button
                                            key={mt} type="button"
                                            onClick={() => setGarageForm({ ...garageForm, mowerType: mt, selectedProduct: '', name: '', customName: '' })}
                                            className={`p-2 rounded-lg border-2 text-center text-sm font-semibold transition ${garageForm.mowerType === mt ? 'bg-[#367C2B] text-white border-[#367C2B]' : 'bg-white text-gray-700 border-gray-200 hover:border-[#367C2B]'}`}
                                        >
                                            {mt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Product dropdown */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Select {typeLabels[garageForm.type]}</label>
                            <select
                                value={garageForm.selectedProduct}
                                onChange={(e) => handleProductSelect(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                            >
                                <option value="">Choose from {currentProducts.length} models...</option>
                                {currentProducts.map(p => (
                                    <option key={p.id} value={p.id}>
                                        {p.brand} - {p.name} {p.deck ? `(${p.deck})` : ''} {p.type ? `- ${p.type}` : ''}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Custom name input */}
                        {garageForm.selectedProduct && garageForm.selectedProduct.includes('-other') && (
                            <div className="mb-4">
                                <label className="block text-sm font-semibold mb-2">Custom Name</label>
                                <input
                                    type="text"
                                    value={garageForm.customName}
                                    onChange={(e) => setGarageForm({ ...garageForm, customName: e.target.value })}
                                    placeholder="Enter your equipment name"
                                    className="w-full px-4 py-2 border rounded-lg"
                                />
                            </div>
                        )}

                        {/* Selected product info */}
                        {selectedProductData && !garageForm.selectedProduct.includes('-other') && (
                            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                                <div className="text-sm font-semibold text-[#367C2B]">{selectedProductData.brand} {selectedProductData.name}</div>
                                {selectedProductData.features && <div className="text-xs text-gray-600 mt-1">{selectedProductData.features}</div>}
                                {selectedProductData.maintenanceSchedule?.note && (
                                    <div className="text-xs text-gray-500 mt-1 italic">{selectedProductData.maintenanceSchedule.note}</div>
                                )}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={!garageForm.selectedProduct || (garageForm.selectedProduct.includes('-other') && !garageForm.customName)}
                            className="w-full px-4 py-2 bg-[#367C2B] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Add to Garage
                        </button>
                    </form>
                </div>

                {/* Equipment list */}
                <div className="bg-white rounded-lg shadow p-4">
                    <h3 className="font-bold mb-4">Your Equipment ({equipment.length})</h3>
                    {equipment.length === 0 ? (
                        <p className="text-gray-500 text-center py-6">No equipment yet — add your first piece above!</p>
                    ) : (
                        <div className="space-y-3">
                            {equipment.map(item => {
                                const mowingHours = item.type === 'mowers'
                                    ? activities
                                        .filter(a => a.type === 'mowing' && a.data && a.data.mowerUsed === item.name)
                                        .reduce((sum, a) => sum + (parseFloat(a.data.duration) || 45) / 60, 0)
                                    : 0;
                                const schedule = item.maintenanceSchedule;
                                return (
                                    <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                                {item.brand && item.brand !== 'Custom' && (
                                                    <div className="text-sm text-[#367C2B] font-semibold">{item.brand}</div>
                                                )}
                                                <div className="text-xs text-gray-500 capitalize">{typeLabels[item.type] || item.type}</div>
                                                {item.details && <div className="text-xs text-gray-500 mt-1">{item.details}</div>}
                                            </div>
                                            <button
                                                onClick={() => onDelete(item.id)}
                                                className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        {schedule && (
                                            <div className="mt-3 pt-3 border-t border-gray-200">
                                                <div className="text-xs font-bold text-[#367C2B] uppercase mb-2">Maintenance Schedule</div>
                                                {schedule.note ? (
                                                    <div className="text-xs text-gray-500 italic">{schedule.note}</div>
                                                ) : (
                                                    <div className="space-y-1">
                                                        {item.type === 'mowers' && (
                                                            <div className="text-xs text-gray-600 mb-2">
                                                                Est. hours logged: <span className="font-bold text-[#367C2B]">{Math.round(mowingHours * 10) / 10} hrs</span>
                                                            </div>
                                                        )}
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {schedule.oilChange && (
                                                                <div className={`text-xs p-2 rounded ${mowingHours >= schedule.oilChange ? 'bg-red-50 border border-red-200' : 'bg-gray-100'}`}>
                                                                    <span className="font-semibold">Oil:</span> Every {schedule.oilChange} hrs
                                                                    {mowingHours >= schedule.oilChange && <div className="text-red-600 font-bold mt-0.5">Due now</div>}
                                                                </div>
                                                            )}
                                                            {schedule.airFilter && (
                                                                <div className={`text-xs p-2 rounded ${typeof schedule.airFilter === 'number' && mowingHours >= schedule.airFilter ? 'bg-red-50 border border-red-200' : 'bg-gray-100'}`}>
                                                                    <span className="font-semibold">Air Filter:</span> {typeof schedule.airFilter === 'number' ? `Every ${schedule.airFilter} hrs` : schedule.airFilter}
                                                                </div>
                                                            )}
                                                            {schedule.sparkPlug && (
                                                                <div className={`text-xs p-2 rounded ${typeof schedule.sparkPlug === 'number' && mowingHours >= schedule.sparkPlug ? 'bg-red-50 border border-red-200' : 'bg-gray-100'}`}>
                                                                    <span className="font-semibold">Spark Plug:</span> {typeof schedule.sparkPlug === 'number' ? `Every ${schedule.sparkPlug} hrs` : schedule.sparkPlug}
                                                                </div>
                                                            )}
                                                            {schedule.cleaning && (
                                                                <div className="text-xs p-2 rounded bg-gray-100">
                                                                    <span className="font-semibold">Cleaning:</span> {schedule.cleaning}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        );
    };
})();
