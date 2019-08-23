import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "x-layers-container",
  styleUrl: "x-layers-container.css",
  scoped: true
})
export class XlayersViewerContainer {
  element!: HTMLElement;

  @Prop({
    mutable: true
  })
  data: SketchMSData;

  @Prop() mode: "2d" | "3d" = "2d";
  @Prop() zoom: number;
  @Prop() wireframe: boolean;

  componentWillLoad() {
    // this.data.map()
  }

  render() {
    return (
      <div class="layers-container">
        <x-layers-canvas
          ref={el => (this.element = el)}
          data={this.data}
          mode={this.mode}
          zoom={this.zoom}
          wireframe={this.wireframe}
        />
      </div>
    );
  }
}