import {
  C,
  G,
  K,
  Q,
  X,
  h
} from "./chunk-FDQQYEJQ.js";
import {
  CommonModule,
  KeyValuePipe,
  NgTemplateOutlet
} from "./chunk-DH4LX6ZO.js";
import {
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  NgModule,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation$1,
  afterNextRender,
  computed,
  core_exports,
  effect,
  inject,
  input,
  reflectComponentType,
  setClassMetadata,
  signal,
  viewChild,
  viewChildren,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-QLXICIUC.js";
import "./chunk-P6U2JBMQ.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// node_modules/@magnolia/angular-editor/fesm2022/magnolia-angular-editor.mjs
var _forTrack0 = ($index, $item) => $item.key;
function DefaultFallbackComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prop_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate2("", prop_r1.key, ": ", ctx_r1.formatValue(prop_r1.value), "");
  }
}
function EditableComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mgnl-comment", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("annotation", ctx_r0.annotation());
  }
}
function EditableComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mgnl-comment", 2);
  }
}
var _c0 = ["*"];
function EditableAreaRenderer_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function EditableAreaRenderer_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function EditableAreaRenderer_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function EditableAreaRenderer_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, EditableAreaRenderer_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const contentProjection_r1 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentProjection_r1);
  }
}
function EditableAreaRenderer_ng_template_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function EditableAreaRenderer_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ol");
    ɵɵtemplate(1, EditableAreaRenderer_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const contentProjection_r1 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentProjection_r1);
  }
}
function EditableAreaRenderer_ng_template_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function EditableAreaRenderer_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section");
    ɵɵtemplate(1, EditableAreaRenderer_ng_template_7_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const contentProjection_r1 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentProjection_r1);
  }
}
function EditableAreaRenderer_ng_template_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function EditableAreaRenderer_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, EditableAreaRenderer_ng_template_9_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const contentProjection_r1 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentProjection_r1);
  }
}
function EditableAreaRenderer_ng_template_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function EditableAreaRenderer_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtemplate(1, EditableAreaRenderer_ng_template_11_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const contentProjection_r1 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", contentProjection_r1);
  }
}
var _c1 = ["customViewContent"];
var _c2 = ["contentProjection"];
var _c3 = ["defaultView"];
var _forTrack1 = ($index, $item) => $item["@path"];
function EditableArea_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mgnl-comment", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("annotation", ctx_r0.annotation());
  }
}
function EditableArea_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.templateRef());
  }
}
function EditableArea_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "editable-area-renderer", 5);
    ɵɵelementContainer(1, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("elementType", ctx_r0.elementType())("attrs", ctx_r0.attrs());
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.templateRef());
  }
}
function EditableArea_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mgnl-comment", 6);
  }
}
function EditableArea_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function EditableArea_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, EditableArea_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.customView() || null)("ngTemplateOutletContext", ctx_r0.areaContext());
  }
}
function EditableArea_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function EditableArea_ng_template_8_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "editable-component", 8);
  }
  if (rf & 2) {
    const component_r2 = ctx.$implicit;
    const ɵ$index_26_r3 = ctx.$index;
    ɵɵproperty("content", component_r2)("index", ɵ$index_26_r3);
  }
}
function EditableArea_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, EditableArea_ng_template_8_For_1_Template, 1, 2, "editable-component", 8, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵrepeater(ctx_r0.components());
  }
}
function EditablePage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "mgnl-comment", 0);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("alwaysRender", !!((tmp_1_0 = ctx_r0.magnoliaContext()) == null ? null : tmp_1_0.isMagnolia))("shouldRunOnFrameReady", true)("shouldRefresh", true)("annotation", ctx_r0.annotation());
  }
}
var TEMPLATE_ID_PROP = "mgnl:template";
var constants = {
  TEMPLATE_ID_PROP
};
var DefaultFallbackComponent = class _DefaultFallbackComponent {
  constructor() {
    this.metadata = input();
    this.data = input();
  }
  get templateId() {
    return this.metadata()?.[TEMPLATE_ID_PROP];
  }
  trimIfObject(value) {
    if (value === "[object Object]") {
      return "[object]";
    }
    return value;
  }
  formatValue(value) {
    return this.trimIfObject("" + value);
  }
  static {
    this.ɵfac = function DefaultFallbackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultFallbackComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DefaultFallbackComponent,
      selectors: [["ng-component"]],
      inputs: {
        metadata: [1, "metadata"],
        data: [1, "data"]
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 9,
      vars: 3,
      template: function DefaultFallbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div")(1, "div")(2, "strong")(3, "em");
          ɵɵtext(4);
          ɵɵelementEnd()()();
          ɵɵrepeaterCreate(5, DefaultFallbackComponent_For_6_Template, 2, 2, "div", null, _forTrack0);
          ɵɵpipe(7, "keyvalue");
          ɵɵelement(8, "p");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(4);
          ɵɵtextInterpolate1("Template not found: ", ctx.templateId, "");
          ɵɵadvance();
          ɵɵrepeater(ɵɵpipeBind1(7, 1, ctx.data()));
        }
      },
      dependencies: [KeyValuePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultFallbackComponent, [{
    type: Component,
    args: [{
      template: `
    <div>
      <div>
        <strong>
          <em>Template not found: {{ templateId }}</em>
        </strong>
      </div>
      @for (prop of data() | keyvalue; track prop.key) {
        <div>{{ prop.key }}: {{ formatValue(prop.value) }}</div>
      }
      <p></p>
    </div>
  `,
      standalone: true,
      imports: [KeyValuePipe]
    }]
  }], null, null);
})();
var computedWithPrev = (computation, options) => {
  let previous;
  return computed(() => {
    const newValue = computation(previous);
    previous = newValue;
    return newValue;
  }, options);
};
var MAGNOLIA_CONFIG_COMPONENT_MAPPINGS = new InjectionToken("magnolia.config.component_mappings");
var EditorContextService = class _EditorContextService {
  constructor() {
    this.componentMappings = {};
    this.templateAnnotations = null;
    try {
      const mapping = inject(MAGNOLIA_CONFIG_COMPONENT_MAPPINGS);
      if (mapping) {
        this.$setComponentMapping(mapping);
      }
    } catch (error) {
      if (console.isDebugging) {
        K.log(error.toString());
      }
    }
  }
  $setComponentMapping(componentMappings) {
    if (!componentMappings) {
      K.error("componentMappings cannot be null");
      return;
    }
    this.componentMappings = componentMappings;
  }
  $setFallbackComponent(customFallbackComponent) {
    if (!customFallbackComponent) {
      return;
    }
    this.fallbackComponent = customFallbackComponent;
  }
  getFallbackComponent() {
    const fallback = typeof this.fallbackComponent === "function" ? this.fallbackComponent() : this.fallbackComponent;
    return typeof fallback === "function" ? fallback : fallback ? DefaultFallbackComponent : null;
  }
  getComponentByTemplateId(templateId) {
    if (!templateId) {
      const msg = "Component content is missing";
      K.error(msg);
      return null;
    }
    const component = this.componentMappings[templateId];
    if (!component) {
      K.error(`Component with ID ${templateId} is not mapped.`);
      const fallbackComponent = this.getFallbackComponent();
      if (fallbackComponent) {
        fallbackComponent.isFallbackComponent = true;
      }
      return fallbackComponent;
    }
    return component;
  }
  $setTemplateAnnotations(templateAnnotations) {
    this.templateAnnotations = templateAnnotations;
  }
  getTemplateAnnotations() {
    return this.templateAnnotations;
  }
  $setTemplateAnnotationsWithSelectedVariants(templateAnnotations) {
    this.templateAnnotationsWithSelectedVariants = templateAnnotations;
  }
  $setMagnoliaContext(magnoliaContext) {
    this.magnoliaContext = magnoliaContext;
  }
  getMagnoliaContext() {
    return this.magnoliaContext;
  }
  getTemplateAnnotationsWithSelectedVariants() {
    return this.templateAnnotationsWithSelectedVariants;
  }
  static {
    this.ɵfac = function EditorContextService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditorContextService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _EditorContextService,
      factory: _EditorContextService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditorContextService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CommentComponent = class _CommentComponent {
  constructor(vcRef, editorContext, renderer) {
    this.vcRef = vcRef;
    this.editorContext = editorContext;
    this.renderer = renderer;
    this.annotation = input();
    this.alwaysRender = input(false);
    this.shouldRefresh = input(true);
    this.shouldRunOnFrameReady = input(false);
    this.render = computed(() => this.alwaysRender() || this.editorContext.getMagnoliaContext()?.isMagnoliaEdit || false);
    this.isOnBrowser = signal(false);
    this.commentNode = computedWithPrev((oldComment) => {
      if (!this.render() || !this.isOnBrowser()) {
        return void 0;
      }
      const comment = this.renderer.createComment(this.annotation());
      this.renderer.insertBefore(this.vcRef.element.nativeElement.parentElement, comment, this.vcRef.element.nativeElement);
      if (oldComment) {
        oldComment.remove();
      }
      return comment;
    });
    afterNextRender(() => {
      this.isOnBrowser.set(true);
    });
    effect(() => {
      if (!this.commentNode()) {
        return;
      }
      if (this.shouldRefresh()) {
        h.refresh();
        if (this.shouldRunOnFrameReady()) {
          h.onFrameReady();
        }
      }
    });
  }
  ngOnDestroy() {
    this.commentNode()?.remove();
  }
  static {
    this.ɵfac = function CommentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommentComponent)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(EditorContextService), ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CommentComponent,
      selectors: [["mgnl-comment"]],
      hostAttrs: ["ngSkipHydration", "true"],
      inputs: {
        annotation: [1, "annotation"],
        alwaysRender: [1, "alwaysRender"],
        shouldRefresh: [1, "shouldRefresh"],
        shouldRunOnFrameReady: [1, "shouldRunOnFrameReady"]
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function CommentComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommentComponent, [{
    type: Component,
    args: [{
      selector: "mgnl-comment",
      template: "",
      standalone: true,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        ngSkipHydration: "true"
      }
      // Comment is not rendered on the server
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: EditorContextService
  }, {
    type: Renderer2
  }], null);
})();
var AsyncComponentLoader = class {
  constructor(loadFunc) {
    this.loadFunc = loadFunc;
  }
  load() {
    return this.loadFunc();
  }
};
var AngularEditorService = class _AngularEditorService {
  constructor(editorContext) {
    this.editorContext = editorContext;
  }
  getComponentClass(content) {
    return __async(this, null, function* () {
      if (!content || !content[TEMPLATE_ID_PROP]) {
        return void 0;
      }
      const componentClassLoader = this.editorContext.getComponentByTemplateId(content[TEMPLATE_ID_PROP]);
      if (componentClassLoader instanceof AsyncComponentLoader) {
        return yield componentClassLoader.load();
      } else {
        return componentClassLoader || void 0;
      }
    });
  }
  getComponentProperties(componentContent, index, isFallbackComponent) {
    return C.getComponentProperties(componentContent, index, isFallbackComponent);
  }
  setComponentInstanceProperties(componentRef, props) {
    const mirror = reflectComponentType(componentRef.componentType);
    Object.entries(props).map(([key, value]) => {
      if (mirror?.inputs.some((input2) => input2.propName === key)) {
        componentRef.setInput(key, value);
      } else {
        const instance = componentRef.instance;
        instance[key] = value;
      }
    });
  }
  getHtmlAttributes(element, excludes = []) {
    return Array.from(element.attributes).reduce((acc, attr) => {
      if (this.isExcluded(attr.name, excludes) || attr.name.startsWith("ng-reflect-")) {
        return acc;
      }
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  }
  getAreaComponents(areaContent) {
    const results = [];
    if (areaContent) {
      const components = areaContent["@nodes"];
      components?.forEach((nodeName) => {
        const value = areaContent[nodeName];
        if (value && typeof value === "object" && "@nodeType" in value && value["@nodeType"] === "mgnl:component") {
          results.push(value);
        }
      });
    }
    return results;
  }
  isExcluded(str, excludesRegex) {
    return excludesRegex.some((regex) => regex == str || new RegExp(regex).test(str));
  }
  static {
    this.ɵfac = function AngularEditorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AngularEditorService)(ɵɵinject(EditorContextService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AngularEditorService,
      factory: _AngularEditorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EditorContextService
  }], null);
})();
var DynamicComponentRendererDirective = class _DynamicComponentRendererDirective {
  constructor(vcRef, angularEditorService, renderer) {
    this.vcRef = vcRef;
    this.angularEditorService = angularEditorService;
    this.renderer = renderer;
    this.componentClass = input();
    this.props = input();
    this.attrs = input();
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => {
      this.onDestroy();
    });
    effect(() => {
      this.loadComponent();
    });
  }
  onDestroy() {
    this.componentRef?.destroy();
    this.componentRef = void 0;
  }
  loadComponent() {
    this.vcRef.clear();
    if (!this.componentClass()) {
      return;
    }
    this.componentRef = this.vcRef.createComponent(this.componentClass());
    const attrs = this.attrs() || {};
    const htmlElement = this.componentRef.location.nativeElement;
    const childElements = Array.from(htmlElement.children);
    const inheritChild = childElements.find((element) => element.hasAttribute("bind-attrs")) || htmlElement.firstChild;
    Object.entries(attrs).forEach(([key, value]) => {
      this.renderer.setAttribute(inheritChild, key, value);
    });
    this.angularEditorService.setComponentInstanceProperties(this.componentRef, this.props() || {});
  }
  static {
    this.ɵfac = function DynamicComponentRendererDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DynamicComponentRendererDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(AngularEditorService), ɵɵdirectiveInject(Renderer2));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DynamicComponentRendererDirective,
      selectors: [["", "dynamic-component-renderer", ""]],
      inputs: {
        componentClass: [1, "componentClass"],
        props: [1, "props"],
        attrs: [1, "attrs"]
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicComponentRendererDirective, [{
    type: Directive,
    args: [{
      selector: "[dynamic-component-renderer]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: AngularEditorService
  }, {
    type: Renderer2
  }], null);
})();
function getPendingTasks() {
  const aC = core_exports;
  const _pendingTasks = aC.PendingTasks || // Angular 19
  aC.ExperimentalPendingTasks;
  return _pendingTasks;
}
var PendingTasksService = class _PendingTasksService {
  constructor() {
    const typeT = getPendingTasks();
    if (typeT) {
      this.pendingTasks = inject(typeT);
    }
  }
  add() {
    return this.pendingTasks.add();
  }
  run(fn) {
    if (this.pendingTasks.run) {
      return this.pendingTasks.run(fn);
    } else {
      const p = this.add();
      return fn().finally(p);
    }
  }
  static {
    this.ɵfac = function PendingTasksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PendingTasksService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PendingTasksService,
      factory: _PendingTasksService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingTasksService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var EditableComponent = class _EditableComponent {
  constructor(editorContext, angularEditorService, pendingTasksService, elementRef) {
    this.editorContext = editorContext;
    this.angularEditorService = angularEditorService;
    this.pendingTasksService = pendingTasksService;
    this.elementRef = elementRef;
    this.content = input.required();
    this.index = input(0);
    this.componentClass = signal(void 0);
    this.props = computed(() => this.angularEditorService.getComponentProperties(this.renderingContent(), this.index() || 0, false));
    this.templateAnnotations = computed(() => this.editorContext.getTemplateAnnotationsWithSelectedVariants());
    this.annotation = computed(() => {
      const templateId = this.content ? this.content()["@path"] : void 0;
      if (templateId) {
        return this.templateAnnotations()?.[templateId];
      }
      return;
    });
    this.attrs = computed(() => this.angularEditorService.getHtmlAttributes(this.elementRef.nativeElement));
    this.renderingContent = computed(() => {
      const templateAnnotations = this.templateAnnotations() || {};
      const variantContent = X.getSelectedVariant(this.content(), templateAnnotations);
      return Q.generateMissingAreas(variantContent, templateAnnotations);
    });
    effect(() => {
      this.pendingTasksService.run(() => __async(this, null, function* () {
        const componentRef = yield this.angularEditorService.getComponentClass(this.renderingContent());
        this.componentClass.set(componentRef);
      }));
    });
  }
  static {
    this.ɵfac = function EditableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditableComponent)(ɵɵdirectiveInject(EditorContextService), ɵɵdirectiveInject(AngularEditorService), ɵɵdirectiveInject(PendingTasksService), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _EditableComponent,
      selectors: [["editable-component"]],
      inputs: {
        content: [1, "content"],
        index: [1, "index"]
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 5,
      consts: [[3, "annotation"], ["dynamic-component-renderer", "", 3, "componentClass", "props", "attrs"], ["annotation", "/cms:component"]],
      template: function EditableComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, EditableComponent_Conditional_0_Template, 1, 1, "mgnl-comment", 0);
          ɵɵelementContainer(1, 1);
          ɵɵtemplate(2, EditableComponent_Conditional_2_Template, 1, 0, "mgnl-comment", 2);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.annotation() ? 0 : -1);
          ɵɵadvance();
          ɵɵproperty("componentClass", ctx.componentClass())("props", ctx.props())("attrs", ctx.attrs());
          ɵɵadvance();
          ɵɵconditional(ctx.annotation() ? 2 : -1);
        }
      },
      dependencies: [CommentComponent, DynamicComponentRendererDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableComponent, [{
    type: Component,
    args: [{
      selector: "editable-component",
      template: `
    @if (annotation()) {
      <mgnl-comment [annotation]="annotation()"></mgnl-comment>
    }
    <ng-container
      dynamic-component-renderer
      [componentClass]="componentClass()"
      [props]="props()"
      [attrs]="attrs()"
    ></ng-container>
    @if (annotation()) {
      <mgnl-comment annotation="/cms:component"></mgnl-comment>
    }
  `,
      standalone: true,
      encapsulation: ViewEncapsulation$1.None,
      imports: [CommentComponent, DynamicComponentRendererDirective]
    }]
  }], () => [{
    type: EditorContextService
  }, {
    type: AngularEditorService
  }, {
    type: PendingTasksService
  }, {
    type: ElementRef
  }], null);
})();
var ElementTypeDirective = class _ElementTypeDirective {
  constructor() {
    this.elementType = input();
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function ElementTypeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ElementTypeDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ElementTypeDirective,
      selectors: [["", "elementType", ""]],
      inputs: {
        elementType: [1, "elementType"]
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElementTypeDirective, [{
    type: Directive,
    args: [{
      selector: "[elementType]",
      standalone: true
    }]
  }], null, null);
})();
var EditableAreaRenderer = class _EditableAreaRenderer {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.elementType = input("div");
    this.attrs = input();
    this.templateRefs = viewChildren(ElementTypeDirective);
    this.templateRef = computed(() => this.templateRefs().find((ref) => ref.elementType() === this.elementType())?.templateRef || null);
    this.init();
  }
  init() {
    effect(() => {
      const element = this.elementRef.nativeElement;
      const wrapper = element.querySelector(this.elementType() || "div");
      if (wrapper) {
        this.setAttrs(wrapper);
      }
    });
  }
  setAttrs(element) {
    Object.entries(this.attrs() || {}).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  static {
    this.ɵfac = function EditableAreaRenderer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditableAreaRenderer)(ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _EditableAreaRenderer,
      selectors: [["editable-area-renderer"]],
      viewQuery: function EditableAreaRenderer_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.templateRefs, ElementTypeDirective, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance();
        }
      },
      inputs: {
        elementType: [1, "elementType"],
        attrs: [1, "attrs"]
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 13,
      vars: 6,
      consts: [["contentProjection", ""], ["templateRefUl", ""], ["templateRefOl", ""], ["templateRefSection", ""], ["templateRefDiv", ""], ["templateRefP", ""], [4, "ngTemplateOutlet"], [3, "elementType"]],
      template: function EditableAreaRenderer_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, EditableAreaRenderer_ng_container_0_Template, 1, 0, "ng-container", 6)(1, EditableAreaRenderer_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, EditableAreaRenderer_ng_template_3_Template, 2, 1, "ng-template", 7, 1, ɵɵtemplateRefExtractor)(5, EditableAreaRenderer_ng_template_5_Template, 2, 1, "ng-template", 7, 2, ɵɵtemplateRefExtractor)(7, EditableAreaRenderer_ng_template_7_Template, 2, 1, "ng-template", 7, 3, ɵɵtemplateRefExtractor)(9, EditableAreaRenderer_ng_template_9_Template, 2, 1, "ng-template", 7, 4, ɵɵtemplateRefExtractor)(11, EditableAreaRenderer_ng_template_11_Template, 2, 1, "ng-template", 7, 5, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngTemplateOutlet", ctx.templateRef());
          ɵɵadvance(3);
          ɵɵproperty("elementType", "ul");
          ɵɵadvance(2);
          ɵɵproperty("elementType", "ol");
          ɵɵadvance(2);
          ɵɵproperty("elementType", "section");
          ɵɵadvance(2);
          ɵɵproperty("elementType", "div");
          ɵɵadvance(2);
          ɵɵproperty("elementType", "p");
        }
      },
      dependencies: [CommonModule, NgTemplateOutlet, ElementTypeDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableAreaRenderer, [{
    type: Component,
    args: [{
      selector: "editable-area-renderer",
      imports: [CommonModule, ElementTypeDirective],
      standalone: true,
      template: `<ng-container *ngTemplateOutlet="templateRef()"> </ng-container>

<ng-template #contentProjection>
  <ng-content></ng-content>
</ng-template>
<ng-template [elementType]="'ul'" #templateRefUl>
  <ul>
    <ng-container *ngTemplateOutlet="contentProjection"></ng-container>
  </ul>
</ng-template>
<ng-template [elementType]="'ol'" #templateRefOl>
  <ol>
    <ng-container *ngTemplateOutlet="contentProjection"></ng-container>
  </ol>
</ng-template>
<ng-template [elementType]="'section'" #templateRefSection>
  <section>
    <ng-container *ngTemplateOutlet="contentProjection"></ng-container>
  </section>
</ng-template>
<ng-template [elementType]="'div'" #templateRefDiv>
  <div>
    <ng-container *ngTemplateOutlet="contentProjection"></ng-container>
  </div>
</ng-template>
<ng-template [elementType]="'p'" #templateRefP>
  <p>
    <ng-container *ngTemplateOutlet="contentProjection"></ng-container>
  </p>
</ng-template>
`
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var EditableArea = class _EditableArea {
  constructor(editorContext, elementRef, angularEditorService) {
    this.editorContext = editorContext;
    this.elementRef = elementRef;
    this.angularEditorService = angularEditorService;
    this.content = input.required();
    this.customView = input();
    this.elementType = input("div");
    this.isDirective = computed(() => {
      return this.elementRef.nativeElement.hasAttribute("editable-area");
    });
    this.components = computed(() => {
      return this.angularEditorService.getAreaComponents(this.content());
    });
    this.areaContext = computed(() => {
      return {
        $implicit: this.content(),
        components: this.components()
      };
    });
    this.attrs = computed(() => this.angularEditorService.getHtmlAttributes(this.elementRef.nativeElement));
    this.customViewContent = viewChild.required("customViewContent");
    this.contentProjection = viewChild.required("contentProjection");
    this.defaultView = viewChild.required("defaultView");
    this.templateRef = computed(() => {
      if (this.customView()) {
        return this.customViewContent();
      }
      const view = this.contentProjection().createEmbeddedView({});
      if (view.rootNodes.length > 0) {
        return this.contentProjection();
      }
      return this.defaultView();
    });
    this.annotation = computed(() => {
      const templateId = this.content() ? this.content()["@path"] : void 0;
      if (templateId) {
        return this.editorContext.getTemplateAnnotationsWithSelectedVariants()?.[templateId];
      }
      return;
    });
  }
  static {
    this.ɵfac = function EditableArea_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditableArea)(ɵɵdirectiveInject(EditorContextService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AngularEditorService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _EditableArea,
      selectors: [["editable-area"], ["", "editable-area", ""]],
      viewQuery: function EditableArea_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuerySignal(ctx.customViewContent, _c1, 5);
          ɵɵviewQuerySignal(ctx.contentProjection, _c2, 5);
          ɵɵviewQuerySignal(ctx.defaultView, _c3, 5);
        }
        if (rf & 2) {
          ɵɵqueryAdvance(3);
        }
      },
      inputs: {
        content: [1, "content"],
        customView: [1, "customView"],
        elementType: [1, "elementType"]
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 10,
      vars: 3,
      consts: [["customViewContent", ""], ["contentProjection", ""], ["defaultView", ""], [3, "annotation"], [3, "ngTemplateOutlet"], [3, "elementType", "attrs"], ["annotation", "/cms:area"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "content", "index"]],
      template: function EditableArea_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, EditableArea_Conditional_0_Template, 1, 1, "mgnl-comment", 3)(1, EditableArea_Conditional_1_Template, 1, 1, "ng-container", 4)(2, EditableArea_Conditional_2_Template, 2, 3, "editable-area-renderer", 5)(3, EditableArea_Conditional_3_Template, 1, 0, "mgnl-comment", 6)(4, EditableArea_ng_template_4_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(6, EditableArea_ng_template_6_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(8, EditableArea_ng_template_8_Template, 2, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.annotation() ? 0 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.isDirective() ? 1 : 2);
          ɵɵadvance(2);
          ɵɵconditional(ctx.annotation() ? 3 : -1);
        }
      },
      dependencies: [CommonModule, NgTemplateOutlet, CommentComponent, EditableComponent, EditableAreaRenderer],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableArea, [{
    type: Component,
    args: [{
      selector: "editable-area, [editable-area]",
      standalone: true,
      encapsulation: ViewEncapsulation$1.None,
      imports: [CommonModule, CommentComponent, EditableComponent, EditableAreaRenderer],
      template: `@if (annotation()) {
  <mgnl-comment [annotation]="annotation()"></mgnl-comment>
}
@if(isDirective()) {
  <ng-container [ngTemplateOutlet]="templateRef()"> </ng-container>
} @else {
  <editable-area-renderer [elementType]="elementType()" [attrs]="attrs()">
    <ng-container [ngTemplateOutlet]="templateRef()"> </ng-container>
  </editable-area-renderer>
}
@if (annotation()) {
  <mgnl-comment annotation="/cms:area"></mgnl-comment>
}
<ng-template #customViewContent>
  <ng-container
    *ngTemplateOutlet="customView() || null; context: areaContext()"
  ></ng-container>
</ng-template>

<ng-template #contentProjection>
  <ng-content></ng-content>
</ng-template>

<ng-template #defaultView>
  @for (component of components(); track component['@path']; let idx = $index) {
    <editable-component
      [content]="component"
      [index]="idx"
    ></editable-component>
  }
</ng-template>
`
    }]
  }], () => [{
    type: EditorContextService
  }, {
    type: ElementRef
  }, {
    type: AngularEditorService
  }], null);
})();
var EditablePage = class _EditablePage {
  constructor(editorContext, angularEditorService, pendingTasksService, elementRef) {
    this.editorContext = editorContext;
    this.angularEditorService = angularEditorService;
    this.pendingTasksService = pendingTasksService;
    this.elementRef = elementRef;
    this.content = input.required();
    this.magnoliaContext = input();
    this.templateAnnotations = input();
    this.config = input.required();
    this.listeners = {};
    this.renderingData = computed(() => {
      const selectedComponentVariants = this.magnoliaContext()?.searchParams?.["selectedComponentVariants"];
      return X.getRenderContent(this.content(), this.templateAnnotations(), JSON.parse(selectedComponentVariants || "{}"));
    });
    this.renderingContent = computed(() => this.renderingData().content);
    this.renderingTemplateAnnotations = computed(() => {
      this.editorContext.$setTemplateAnnotationsWithSelectedVariants(this.renderingData().templateAnnotations || void 0);
      return this.renderingData().templateAnnotations;
    });
    this.componentClass = signal(void 0);
    this.props = computed(() => {
      return this.angularEditorService.getComponentProperties(this.renderingContent(), 0, false);
    });
    this.attrs = computed(() => {
      return this.angularEditorService.getHtmlAttributes(this.elementRef.nativeElement);
    });
    this.annotation = computed(() => {
      const path = this.content()["@path"] || void 0;
      if (path) {
        return this.renderingTemplateAnnotations()?.[path];
      }
      return;
    });
    this.init();
  }
  init() {
    effect(() => {
      this.editorContext.$setComponentMapping(this.config().componentMappings);
      this.editorContext.$setFallbackComponent(this.config().fallbackComponent);
    });
    effect(() => {
      if (this.renderingContent()) {
        this.pendingTasksService.run(() => __async(this, null, function* () {
          const componentRef = yield this.angularEditorService.getComponentClass(this.renderingContent());
          this.componentClass.set(componentRef);
        }));
      }
      if (this.magnoliaContext()) {
        this.editorContext.$setMagnoliaContext(this.magnoliaContext());
      }
    });
    afterNextRender(() => {
      if (this.magnoliaContext()?.isMagnoliaEdit) {
        G.initialVariantsHandler(this.listeners);
        G.init(this.listeners);
      }
    });
  }
  static {
    this.ɵfac = function EditablePage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EditablePage)(ɵɵdirectiveInject(EditorContextService), ɵɵdirectiveInject(AngularEditorService), ɵɵdirectiveInject(PendingTasksService), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _EditablePage,
      selectors: [["editable-page"]],
      inputs: {
        content: [1, "content"],
        magnoliaContext: [1, "magnoliaContext"],
        templateAnnotations: [1, "templateAnnotations"],
        config: [1, "config"]
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 4,
      consts: [[3, "alwaysRender", "shouldRunOnFrameReady", "shouldRefresh", "annotation"], ["dynamic-component-renderer", "", 3, "componentClass", "props", "attrs"]],
      template: function EditablePage_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, EditablePage_Conditional_0_Template, 1, 4, "mgnl-comment", 0);
          ɵɵelementContainer(1, 1);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.annotation() ? 0 : -1);
          ɵɵadvance();
          ɵɵproperty("componentClass", ctx.componentClass())("props", ctx.props())("attrs", ctx.attrs());
        }
      },
      dependencies: [CommentComponent, DynamicComponentRendererDirective],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditablePage, [{
    type: Component,
    args: [{
      selector: "editable-page",
      template: `
    @if (annotation()) {
      <mgnl-comment
        [alwaysRender]="!!magnoliaContext()?.isMagnolia"
        [shouldRunOnFrameReady]="true"
        [shouldRefresh]="true"
        [annotation]="annotation()"
      ></mgnl-comment>
    }
    <ng-container
      dynamic-component-renderer
      [componentClass]="componentClass()"
      [props]="props()"
      [attrs]="attrs()"
    ></ng-container>
  `,
      standalone: true,
      encapsulation: ViewEncapsulation$1.None,
      imports: [CommentComponent, DynamicComponentRendererDirective]
    }]
  }], () => [{
    type: EditorContextService
  }, {
    type: AngularEditorService
  }, {
    type: PendingTasksService
  }, {
    type: ElementRef
  }], null);
})();
var MagnoliaModule = class _MagnoliaModule {
  static {
    this.ɵfac = function MagnoliaModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MagnoliaModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MagnoliaModule,
      imports: [CommonModule, DefaultFallbackComponent, EditablePage, EditableComponent, EditableArea, CommentComponent],
      exports: [DefaultFallbackComponent, EditableArea, EditableComponent, EditablePage, CommentComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [EditorContextService],
      imports: [CommonModule, EditableArea]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MagnoliaModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DefaultFallbackComponent, EditablePage, EditableComponent, EditableArea, CommentComponent],
      providers: [EditorContextService],
      exports: [DefaultFallbackComponent, EditableArea, EditableComponent, EditablePage, CommentComponent]
    }]
  }], null, null);
})();
export {
  AngularEditorService,
  AsyncComponentLoader,
  CommentComponent,
  DefaultFallbackComponent,
  DynamicComponentRendererDirective,
  EditableArea,
  EditableComponent,
  EditablePage,
  EditorContextService,
  MAGNOLIA_CONFIG_COMPONENT_MAPPINGS,
  MagnoliaModule,
  PendingTasksService,
  constants
};
//# sourceMappingURL=@magnolia_angular-editor.js.map
