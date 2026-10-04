/* Étiquettes : une mise à jour par image, sans réinsérer de couche masquée. */
var hideLabel = function(label) { if (label.labelObject && label.labelObject.style) label.labelObject.style.opacity = 0; };
var showLabel = function(label) { if (label.labelObject && label.labelObject.style) label.labelObject.style.opacity = 1; };
var labelEngine = new labelgun.default(hideLabel, showLabel);
var labels = [], totalMarkers = 0, id = 0;
var labelFrame = null, pendingLabelGroups = [];
function resetLabels(groups) {
    pendingLabelGroups = groups;
    if (labelFrame !== null) return;
    labelFrame = requestAnimationFrame(function() {
        labelFrame = null;
        labelEngine.reset();
        var index = 0;
        pendingLabelGroups.forEach(function(group) {
            group.eachLayer(function(layer) {
                if (map.hasLayer(layer)) addLabel(layer, ++index);
            });
        });
        labelEngine.update();
    });
}
function addLabel(layer, labelId) {
    if (!map.hasLayer(layer) || !layer.getTooltip) return;
    var tooltip = layer.getTooltip();
    var element = tooltip && (tooltip.getElement ? tooltip.getElement() : tooltip._container);
    if (!element || !element.isConnected) return;
    var rect = element.getBoundingClientRect(), origin = map.getContainer().getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    var bottomLeft = map.containerPointToLatLng([rect.left - origin.left, rect.bottom - origin.top]);
    var topRight = map.containerPointToLatLng([rect.right - origin.left, rect.top - origin.top]);
    labelEngine.ingestLabel({bottomLeft:[bottomLeft.lng,bottomLeft.lat],topRight:[topRight.lng,topRight.lat]},labelId,1,element,'label '+labelId,false);
}
