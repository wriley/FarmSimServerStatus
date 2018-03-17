var getVehicleType = (function () {
    // Maps individual vehicle types to vehicle group names
    var vehicleGroupMapping = {
        // Default
        '@': 'tool',

        // Identities
        'vehicle': 'vehicle',
        'harvester': 'harvester',
        'tool': 'tool',
        'trailer': 'trailer',

        // Individuals
        'tractors': 'vehicle',
        'trucks': 'vehicle',
        'wheelLoaders': {
            '@': 'vehicle',
            'dynamicMountAttacherImplement': 'tool',
            'shovel_animated': 'tool',
            'shovel_dynamicMountAttacher': 'tool'
        },
        'teleLoaders': {
            '@': 'vehicle',
            'dynamicMountAttacherImplement': 'tool',
            'baleGrab': 'tool',
            'shovel_dynamicMountAttacher': 'tool',
            'shovel_animated': 'tool'
        },
        'skidSteers': {
            '@': 'vehicle',
            'dynamicMountAttacherImplement': 'tool',
            'shovel': 'tool',
            'shovel_dynamicMountAttacher': 'tool',
            'stumpCutter': 'tool',
            'treeSaw': 'tool'
        },
        'cars': 'vehicle',

        'harvesters': 'harvester',
        'forageHarvesters': {
            '@': 'harvester',
            'attachableCombine': 'tool'
        },
        'potatoHarvesting': {
            '@': 'harvester',
            'defoliator_animated': 'tool'
        },
        'beetHarvesting': {
            '@': 'harvester',
            'defoliater_cutter_animated': 'tool'
        },

        'frontLoaders': {
            '@': 'tool',
            'wheelLoader': 'vehicle'
        },
        'forageHarvesterCutters': 'tool',
        'cutters': 'tool',
        'plows': 'tool',
        'cultivators': 'tool',
        'sowingMachines': 'tool',
        'sprayers': {
            '@': 'tool',
            'selfPropelledSprayer': 'vehicle'
        },
        'fertilizerSpreaders': 'tool',
        'weeders': 'tool',
        'mowers': 'tool',
        'tedders': 'tool',
        'windrowers': 'tool',
        'baling': {
            '@': 'tool',
            'transportTrailer': 'trailer',
            'baleLoader': 'trailer',
            'baler': 'trailer'
        },
        'chainsaws': 'tool',
        'wood': {
            '@': 'tool',
            'transportTrailer': 'trailer',
            'forwarderTrailer_steerable': 'trailer',
            'woodCrusherTrailer': 'trailer',
            'combine_animated': 'vehicle',
            'forwarder': 'vehicle',
            'woodHarvester': 'vehicle'
        },
        'animals': 'tool',
        'leveler': 'tool',
        'misc': {
            '@': 'tool',
            'fuelTrailer': 'trailer'
        },
        'dollys': 'tool',
        'weights': 'tool',
        'pallets': 'tool',
        'belts': 'tool',
        'placeables': 'tool',

        'tippers': 'trailer',
        'augerWagons': 'trailer',
        'slurryTanks': {
            '@': 'trailer',
            'manureBarrelCultivator': 'tool'
        },
        'manureSpreaders': 'trailer',
        'loaderWagons': 'trailer',
        'lowloaders': 'trailer',
        'cutterTrailers': 'trailer',
        'animals': {
            '@': 'trailer',
            'selfPropelledMixerWagon': 'vehicle'
        },
        'dollys': 'trailer'
    };

    return function (vehicleType, vehicleSubtype) {
        var mapping = vehicleGroupMapping[vehicleType] || vehicleGroupMapping['@'];

        if (mapping instanceof Object) {
            mapping = mapping[vehicleSubtype] || mapping['@']
        }

        return mapping;
    };
}());