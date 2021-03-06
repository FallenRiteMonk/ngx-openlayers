/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
export declare class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy {
    source: source.Tile;
    preload: number;
    useInterimTilesOnError: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
}
