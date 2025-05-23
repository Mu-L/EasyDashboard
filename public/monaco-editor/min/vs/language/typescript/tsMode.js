/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.46.0(21007360cad28648bdf46282a2592cb47c3a7a6f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
define('vs/language/typescript/tsMode', ['require', 'require'], require => {
  'use strict'
  var moduleExports = (() => {
    var ee = Object.create
    var K = Object.defineProperty
    var te = Object.getOwnPropertyDescriptor
    var ie = Object.getOwnPropertyNames
    var re = Object.getPrototypeOf,
      se = Object.prototype.hasOwnProperty
    var B = (s =>
      typeof require < 'u'
        ? require
        : typeof Proxy < 'u'
          ? new Proxy(s, { get: (e, t) => (typeof require < 'u' ? require : e)[t] })
          : s)(function (s) {
      if (typeof require < 'u') return require.apply(this, arguments)
      throw Error('Dynamic require of "' + s + '" is not supported')
    })
    var ne = (s, e) => () => (e || s((e = { exports: {} }).exports, e), e.exports),
      oe = (s, e) => {
        for (var t in e) K(s, t, { get: e[t], enumerable: !0 })
      },
      H = (s, e, t, i) => {
        if ((e && typeof e == 'object') || typeof e == 'function')
          for (let l of ie(e))
            !se.call(s, l) && l !== t && K(s, l, { get: () => e[l], enumerable: !(i = te(e, l)) || i.enumerable })
        return s
      },
      $ = (s, e, t) => (H(s, e, 'default'), t && H(t, e, 'default')),
      z = (s, e, t) => (
        (t = s != null ? ee(re(s)) : {}),
        H(e || !s || !s.__esModule ? K(t, 'default', { value: s, enumerable: !0 }) : t, s)
      ),
      ae = s => H(K({}, '__esModule', { value: !0 }), s)
    var G = ne((he, J) => {
      var le = z(B('vs/editor/editor.api'))
      J.exports = le
    })
    var me = {}
    oe(me, {
      Adapter: () => k,
      CodeActionAdaptor: () => O,
      DefinitionAdapter: () => F,
      DiagnosticsAdapter: () => T,
      DocumentHighlightAdapter: () => D,
      FormatAdapter: () => A,
      FormatHelper: () => x,
      FormatOnTypeAdapter: () => R,
      InlayHintsAdapter: () => N,
      Kind: () => m,
      LibFiles: () => _,
      OutlineAdapter: () => M,
      QuickInfoAdapter: () => P,
      ReferenceAdapter: () => L,
      RenameAdapter: () => E,
      SignatureHelpAdapter: () => I,
      SuggestAdapter: () => C,
      WorkerManager: () => v,
      flattenDiagnosticMessageText: () => U,
      getJavaScriptWorker: () => pe,
      getTypeScriptWorker: () => de,
      setupJavaScript: () => ge,
      setupTypeScript: () => ue,
    })
    var r = {}
    $(r, z(G()))
    var v = class {
      constructor(e, t) {
        this._modeId = e
        this._defaults = t
        ;(this._worker = null),
          (this._client = null),
          (this._configChangeListener = this._defaults.onDidChange(() => this._stopWorker())),
          (this._updateExtraLibsToken = 0),
          (this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(() => this._updateExtraLibs()))
      }
      dispose() {
        this._configChangeListener.dispose(), this._extraLibsChangeListener.dispose(), this._stopWorker()
      }
      _stopWorker() {
        this._worker && (this._worker.dispose(), (this._worker = null)), (this._client = null)
      }
      async _updateExtraLibs() {
        if (!this._worker) return
        let e = ++this._updateExtraLibsToken,
          t = await this._worker.getProxy()
        this._updateExtraLibsToken === e && t.updateExtraLibs(this._defaults.getExtraLibs())
      }
      _getClient() {
        return (
          this._client ||
            (this._client = (async () => (
              (this._worker = r.editor.createWebWorker({
                moduleId: 'vs/language/typescript/tsWorker',
                label: this._modeId,
                keepIdleModels: !0,
                createData: {
                  compilerOptions: this._defaults.getCompilerOptions(),
                  extraLibs: this._defaults.getExtraLibs(),
                  customWorkerPath: this._defaults.workerOptions.customWorkerPath,
                  inlayHintsOptions: this._defaults.inlayHintsOptions,
                },
              })),
              this._defaults.getEagerModelSync()
                ? await this._worker.withSyncedResources(
                    r.editor
                      .getModels()
                      .filter(e => e.getLanguageId() === this._modeId)
                      .map(e => e.uri),
                  )
                : await this._worker.getProxy()
            ))()),
          this._client
        )
      }
      async getLanguageServiceWorker(...e) {
        let t = await this._getClient()
        return this._worker && (await this._worker.withSyncedResources(e)), t
      }
    }
    var q = B('./monaco.contribution')
    var n = {}
    n['lib.d.ts'] = !0
    n['lib.decorators.d.ts'] = !0
    n['lib.decorators.legacy.d.ts'] = !0
    n['lib.dom.d.ts'] = !0
    n['lib.dom.iterable.d.ts'] = !0
    n['lib.es2015.collection.d.ts'] = !0
    n['lib.es2015.core.d.ts'] = !0
    n['lib.es2015.d.ts'] = !0
    n['lib.es2015.generator.d.ts'] = !0
    n['lib.es2015.iterable.d.ts'] = !0
    n['lib.es2015.promise.d.ts'] = !0
    n['lib.es2015.proxy.d.ts'] = !0
    n['lib.es2015.reflect.d.ts'] = !0
    n['lib.es2015.symbol.d.ts'] = !0
    n['lib.es2015.symbol.wellknown.d.ts'] = !0
    n['lib.es2016.array.include.d.ts'] = !0
    n['lib.es2016.d.ts'] = !0
    n['lib.es2016.full.d.ts'] = !0
    n['lib.es2017.d.ts'] = !0
    n['lib.es2017.full.d.ts'] = !0
    n['lib.es2017.intl.d.ts'] = !0
    n['lib.es2017.object.d.ts'] = !0
    n['lib.es2017.sharedmemory.d.ts'] = !0
    n['lib.es2017.string.d.ts'] = !0
    n['lib.es2017.typedarrays.d.ts'] = !0
    n['lib.es2018.asyncgenerator.d.ts'] = !0
    n['lib.es2018.asynciterable.d.ts'] = !0
    n['lib.es2018.d.ts'] = !0
    n['lib.es2018.full.d.ts'] = !0
    n['lib.es2018.intl.d.ts'] = !0
    n['lib.es2018.promise.d.ts'] = !0
    n['lib.es2018.regexp.d.ts'] = !0
    n['lib.es2019.array.d.ts'] = !0
    n['lib.es2019.d.ts'] = !0
    n['lib.es2019.full.d.ts'] = !0
    n['lib.es2019.intl.d.ts'] = !0
    n['lib.es2019.object.d.ts'] = !0
    n['lib.es2019.string.d.ts'] = !0
    n['lib.es2019.symbol.d.ts'] = !0
    n['lib.es2020.bigint.d.ts'] = !0
    n['lib.es2020.d.ts'] = !0
    n['lib.es2020.date.d.ts'] = !0
    n['lib.es2020.full.d.ts'] = !0
    n['lib.es2020.intl.d.ts'] = !0
    n['lib.es2020.number.d.ts'] = !0
    n['lib.es2020.promise.d.ts'] = !0
    n['lib.es2020.sharedmemory.d.ts'] = !0
    n['lib.es2020.string.d.ts'] = !0
    n['lib.es2020.symbol.wellknown.d.ts'] = !0
    n['lib.es2021.d.ts'] = !0
    n['lib.es2021.full.d.ts'] = !0
    n['lib.es2021.intl.d.ts'] = !0
    n['lib.es2021.promise.d.ts'] = !0
    n['lib.es2021.string.d.ts'] = !0
    n['lib.es2021.weakref.d.ts'] = !0
    n['lib.es2022.array.d.ts'] = !0
    n['lib.es2022.d.ts'] = !0
    n['lib.es2022.error.d.ts'] = !0
    n['lib.es2022.full.d.ts'] = !0
    n['lib.es2022.intl.d.ts'] = !0
    n['lib.es2022.object.d.ts'] = !0
    n['lib.es2022.regexp.d.ts'] = !0
    n['lib.es2022.sharedmemory.d.ts'] = !0
    n['lib.es2022.string.d.ts'] = !0
    n['lib.es2023.array.d.ts'] = !0
    n['lib.es2023.d.ts'] = !0
    n['lib.es2023.full.d.ts'] = !0
    n['lib.es5.d.ts'] = !0
    n['lib.es6.d.ts'] = !0
    n['lib.esnext.d.ts'] = !0
    n['lib.esnext.full.d.ts'] = !0
    n['lib.esnext.intl.d.ts'] = !0
    n['lib.scripthost.d.ts'] = !0
    n['lib.webworker.d.ts'] = !0
    n['lib.webworker.importscripts.d.ts'] = !0
    n['lib.webworker.iterable.d.ts'] = !0
    function U(s, e, t = 0) {
      if (typeof s == 'string') return s
      if (s === void 0) return ''
      let i = ''
      if (t) {
        i += e
        for (let l = 0; l < t; l++) i += '  '
      }
      if (((i += s.messageText), t++, s.next)) for (let l of s.next) i += U(l, e, t)
      return i
    }
    function S(s) {
      return s ? s.map(e => e.text).join('') : ''
    }
    var k = class {
        constructor(e) {
          this._worker = e
        }
        _textSpanToRange(e, t) {
          let i = e.getPositionAt(t.start),
            l = e.getPositionAt(t.start + t.length),
            { lineNumber: c, column: u } = i,
            { lineNumber: g, column: o } = l
          return { startLineNumber: c, startColumn: u, endLineNumber: g, endColumn: o }
        }
      },
      _ = class {
        constructor(e) {
          this._worker = e
          ;(this._libFiles = {}), (this._hasFetchedLibFiles = !1), (this._fetchLibFilesPromise = null)
        }
        isLibFile(e) {
          return e && e.path.indexOf('/lib.') === 0 ? !!n[e.path.slice(1)] : !1
        }
        getOrCreateModel(e) {
          let t = r.Uri.parse(e),
            i = r.editor.getModel(t)
          if (i) return i
          if (this.isLibFile(t) && this._hasFetchedLibFiles)
            return r.editor.createModel(this._libFiles[t.path.slice(1)], 'typescript', t)
          let l = q.typescriptDefaults.getExtraLibs()[e]
          return l ? r.editor.createModel(l.content, 'typescript', t) : null
        }
        _containsLibFile(e) {
          for (let t of e) if (this.isLibFile(t)) return !0
          return !1
        }
        async fetchLibFilesIfNecessary(e) {
          this._containsLibFile(e) && (await this._fetchLibFiles())
        }
        _fetchLibFiles() {
          return (
            this._fetchLibFilesPromise ||
              (this._fetchLibFilesPromise = this._worker()
                .then(e => e.getLibFiles())
                .then(e => {
                  ;(this._hasFetchedLibFiles = !0), (this._libFiles = e)
                })),
            this._fetchLibFilesPromise
          )
        }
      }
    var T = class extends k {
        constructor(t, i, l, c) {
          super(c)
          this._libFiles = t
          this._defaults = i
          this._selector = l
          this._disposables = []
          this._listener = Object.create(null)
          let u = a => {
              if (a.getLanguageId() !== l) return
              let d = () => {
                  let { onlyVisible: y } = this._defaults.getDiagnosticsOptions()
                  y ? a.isAttachedToEditor() && this._doValidate(a) : this._doValidate(a)
                },
                p,
                f = a.onDidChangeContent(() => {
                  clearTimeout(p), (p = window.setTimeout(d, 500))
                }),
                b = a.onDidChangeAttached(() => {
                  let { onlyVisible: y } = this._defaults.getDiagnosticsOptions()
                  y && (a.isAttachedToEditor() ? d() : r.editor.setModelMarkers(a, this._selector, []))
                })
              ;(this._listener[a.uri.toString()] = {
                dispose() {
                  f.dispose(), b.dispose(), clearTimeout(p)
                },
              }),
                d()
            },
            g = a => {
              r.editor.setModelMarkers(a, this._selector, [])
              let d = a.uri.toString()
              this._listener[d] && (this._listener[d].dispose(), delete this._listener[d])
            }
          this._disposables.push(r.editor.onDidCreateModel(a => u(a))),
            this._disposables.push(r.editor.onWillDisposeModel(g)),
            this._disposables.push(
              r.editor.onDidChangeModelLanguage(a => {
                g(a.model), u(a.model)
              }),
            ),
            this._disposables.push({
              dispose() {
                for (let a of r.editor.getModels()) g(a)
              },
            })
          let o = () => {
            for (let a of r.editor.getModels()) g(a), u(a)
          }
          this._disposables.push(this._defaults.onDidChange(o)),
            this._disposables.push(this._defaults.onDidExtraLibsChange(o)),
            r.editor.getModels().forEach(a => u(a))
        }
        dispose() {
          this._disposables.forEach(t => t && t.dispose()), (this._disposables = [])
        }
        async _doValidate(t) {
          let i = await this._worker(t.uri)
          if (t.isDisposed()) return
          let l = [],
            {
              noSyntaxValidation: c,
              noSemanticValidation: u,
              noSuggestionDiagnostics: g,
            } = this._defaults.getDiagnosticsOptions()
          c || l.push(i.getSyntacticDiagnostics(t.uri.toString())),
            u || l.push(i.getSemanticDiagnostics(t.uri.toString())),
            g || l.push(i.getSuggestionDiagnostics(t.uri.toString()))
          let o = await Promise.all(l)
          if (!o || t.isDisposed()) return
          let a = o
              .reduce((p, f) => f.concat(p), [])
              .filter(
                p => (this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(p.code) === -1,
              ),
            d = a
              .map(p => p.relatedInformation || [])
              .reduce((p, f) => f.concat(p), [])
              .map(p => (p.file ? r.Uri.parse(p.file.fileName) : null))
          await this._libFiles.fetchLibFilesIfNecessary(d),
            !t.isDisposed() &&
              r.editor.setModelMarkers(
                t,
                this._selector,
                a.map(p => this._convertDiagnostics(t, p)),
              )
        }
        _convertDiagnostics(t, i) {
          let l = i.start || 0,
            c = i.length || 1,
            { lineNumber: u, column: g } = t.getPositionAt(l),
            { lineNumber: o, column: a } = t.getPositionAt(l + c),
            d = []
          return (
            i.reportsUnnecessary && d.push(r.MarkerTag.Unnecessary),
            i.reportsDeprecated && d.push(r.MarkerTag.Deprecated),
            {
              severity: this._tsDiagnosticCategoryToMarkerSeverity(i.category),
              startLineNumber: u,
              startColumn: g,
              endLineNumber: o,
              endColumn: a,
              message: U(
                i.messageText,
                `
`,
              ),
              code: i.code.toString(),
              tags: d,
              relatedInformation: this._convertRelatedInformation(t, i.relatedInformation),
            }
          )
        }
        _convertRelatedInformation(t, i) {
          if (!i) return []
          let l = []
          return (
            i.forEach(c => {
              let u = t
              if ((c.file && (u = this._libFiles.getOrCreateModel(c.file.fileName)), !u)) return
              let g = c.start || 0,
                o = c.length || 1,
                { lineNumber: a, column: d } = u.getPositionAt(g),
                { lineNumber: p, column: f } = u.getPositionAt(g + o)
              l.push({
                resource: u.uri,
                startLineNumber: a,
                startColumn: d,
                endLineNumber: p,
                endColumn: f,
                message: U(
                  c.messageText,
                  `
`,
                ),
              })
            }),
            l
          )
        }
        _tsDiagnosticCategoryToMarkerSeverity(t) {
          switch (t) {
            case 1:
              return r.MarkerSeverity.Error
            case 3:
              return r.MarkerSeverity.Info
            case 0:
              return r.MarkerSeverity.Warning
            case 2:
              return r.MarkerSeverity.Hint
          }
          return r.MarkerSeverity.Info
        }
      },
      C = class s extends k {
        get triggerCharacters() {
          return ['.']
        }
        async provideCompletionItems(e, t, i, l) {
          let c = e.getWordUntilPosition(t),
            u = new r.Range(t.lineNumber, c.startColumn, t.lineNumber, c.endColumn),
            g = e.uri,
            o = e.getOffsetAt(t),
            a = await this._worker(g)
          if (e.isDisposed()) return
          let d = await a.getCompletionsAtPosition(g.toString(), o)
          return !d || e.isDisposed()
            ? void 0
            : {
                suggestions: d.entries.map(f => {
                  let b = u
                  if (f.replacementSpan) {
                    let W = e.getPositionAt(f.replacementSpan.start),
                      w = e.getPositionAt(f.replacementSpan.start + f.replacementSpan.length)
                    b = new r.Range(W.lineNumber, W.column, w.lineNumber, w.column)
                  }
                  let y = []
                  return (
                    f.kindModifiers !== void 0 &&
                      f.kindModifiers.indexOf('deprecated') !== -1 &&
                      y.push(r.languages.CompletionItemTag.Deprecated),
                    {
                      uri: g,
                      position: t,
                      offset: o,
                      range: b,
                      label: f.name,
                      insertText: f.name,
                      sortText: f.sortText,
                      kind: s.convertKind(f.kind),
                      tags: y,
                    }
                  )
                }),
              }
        }
        async resolveCompletionItem(e, t) {
          let i = e,
            l = i.uri,
            c = i.position,
            u = i.offset,
            o = await (await this._worker(l)).getCompletionEntryDetails(l.toString(), u, i.label)
          return o
            ? {
                uri: l,
                position: c,
                label: o.name,
                kind: s.convertKind(o.kind),
                detail: S(o.displayParts),
                documentation: { value: s.createDocumentationString(o) },
              }
            : i
        }
        static convertKind(e) {
          switch (e) {
            case m.primitiveType:
            case m.keyword:
              return r.languages.CompletionItemKind.Keyword
            case m.variable:
            case m.localVariable:
              return r.languages.CompletionItemKind.Variable
            case m.memberVariable:
            case m.memberGetAccessor:
            case m.memberSetAccessor:
              return r.languages.CompletionItemKind.Field
            case m.function:
            case m.memberFunction:
            case m.constructSignature:
            case m.callSignature:
            case m.indexSignature:
              return r.languages.CompletionItemKind.Function
            case m.enum:
              return r.languages.CompletionItemKind.Enum
            case m.module:
              return r.languages.CompletionItemKind.Module
            case m.class:
              return r.languages.CompletionItemKind.Class
            case m.interface:
              return r.languages.CompletionItemKind.Interface
            case m.warning:
              return r.languages.CompletionItemKind.File
          }
          return r.languages.CompletionItemKind.Property
        }
        static createDocumentationString(e) {
          let t = S(e.documentation)
          if (e.tags)
            for (let i of e.tags)
              t += `

${Q(i)}`
          return t
        }
      }
    function Q(s) {
      let e = `*@${s.name}*`
      if (s.name === 'param' && s.text) {
        let [t, ...i] = s.text
        ;(e += `\`${t.text}\``), i.length > 0 && (e += ` \u2014 ${i.map(l => l.text).join(' ')}`)
      } else
        Array.isArray(s.text)
          ? (e += ` \u2014 ${s.text.map(t => t.text).join(' ')}`)
          : s.text && (e += ` \u2014 ${s.text}`)
      return e
    }
    var I = class s extends k {
        constructor() {
          super(...arguments)
          this.signatureHelpTriggerCharacters = ['(', ',']
        }
        static _toSignatureHelpTriggerReason(t) {
          switch (t.triggerKind) {
            case r.languages.SignatureHelpTriggerKind.TriggerCharacter:
              return t.triggerCharacter
                ? t.isRetrigger
                  ? { kind: 'retrigger', triggerCharacter: t.triggerCharacter }
                  : { kind: 'characterTyped', triggerCharacter: t.triggerCharacter }
                : { kind: 'invoked' }
            case r.languages.SignatureHelpTriggerKind.ContentChange:
              return t.isRetrigger ? { kind: 'retrigger' } : { kind: 'invoked' }
            case r.languages.SignatureHelpTriggerKind.Invoke:
            default:
              return { kind: 'invoked' }
          }
        }
        async provideSignatureHelp(t, i, l, c) {
          let u = t.uri,
            g = t.getOffsetAt(i),
            o = await this._worker(u)
          if (t.isDisposed()) return
          let a = await o.getSignatureHelpItems(u.toString(), g, { triggerReason: s._toSignatureHelpTriggerReason(c) })
          if (!a || t.isDisposed()) return
          let d = { activeSignature: a.selectedItemIndex, activeParameter: a.argumentIndex, signatures: [] }
          return (
            a.items.forEach(p => {
              let f = { label: '', parameters: [] }
              ;(f.documentation = { value: S(p.documentation) }),
                (f.label += S(p.prefixDisplayParts)),
                p.parameters.forEach((b, y, W) => {
                  let w = S(b.displayParts),
                    Z = { label: w, documentation: { value: S(b.documentation) } }
                  ;(f.label += w), f.parameters.push(Z), y < W.length - 1 && (f.label += S(p.separatorDisplayParts))
                }),
                (f.label += S(p.suffixDisplayParts)),
                d.signatures.push(f)
            }),
            { value: d, dispose() {} }
          )
        }
      },
      P = class extends k {
        async provideHover(e, t, i) {
          let l = e.uri,
            c = e.getOffsetAt(t),
            u = await this._worker(l)
          if (e.isDisposed()) return
          let g = await u.getQuickInfoAtPosition(l.toString(), c)
          if (!g || e.isDisposed()) return
          let o = S(g.documentation),
            a = g.tags
              ? g.tags
                  .map(p => Q(p))
                  .join(`  

`)
              : '',
            d = S(g.displayParts)
          return {
            range: this._textSpanToRange(e, g.textSpan),
            contents: [
              { value: '```typescript\n' + d + '\n```\n' },
              {
                value:
                  o +
                  (a
                    ? `

` + a
                    : ''),
              },
            ],
          }
        }
      },
      D = class extends k {
        async provideDocumentHighlights(e, t, i) {
          let l = e.uri,
            c = e.getOffsetAt(t),
            u = await this._worker(l)
          if (e.isDisposed()) return
          let g = await u.getDocumentHighlights(l.toString(), c, [l.toString()])
          if (!(!g || e.isDisposed()))
            return g.flatMap(o =>
              o.highlightSpans.map(a => ({
                range: this._textSpanToRange(e, a.textSpan),
                kind:
                  a.kind === 'writtenReference'
                    ? r.languages.DocumentHighlightKind.Write
                    : r.languages.DocumentHighlightKind.Text,
              })),
            )
        }
      },
      F = class extends k {
        constructor(t, i) {
          super(i)
          this._libFiles = t
        }
        async provideDefinition(t, i, l) {
          let c = t.uri,
            u = t.getOffsetAt(i),
            g = await this._worker(c)
          if (t.isDisposed()) return
          let o = await g.getDefinitionAtPosition(c.toString(), u)
          if (
            !o ||
            t.isDisposed() ||
            (await this._libFiles.fetchLibFilesIfNecessary(o.map(d => r.Uri.parse(d.fileName))), t.isDisposed())
          )
            return
          let a = []
          for (let d of o) {
            let p = this._libFiles.getOrCreateModel(d.fileName)
            p && a.push({ uri: p.uri, range: this._textSpanToRange(p, d.textSpan) })
          }
          return a
        }
      },
      L = class extends k {
        constructor(t, i) {
          super(i)
          this._libFiles = t
        }
        async provideReferences(t, i, l, c) {
          let u = t.uri,
            g = t.getOffsetAt(i),
            o = await this._worker(u)
          if (t.isDisposed()) return
          let a = await o.getReferencesAtPosition(u.toString(), g)
          if (
            !a ||
            t.isDisposed() ||
            (await this._libFiles.fetchLibFilesIfNecessary(a.map(p => r.Uri.parse(p.fileName))), t.isDisposed())
          )
            return
          let d = []
          for (let p of a) {
            let f = this._libFiles.getOrCreateModel(p.fileName)
            f && d.push({ uri: f.uri, range: this._textSpanToRange(f, p.textSpan) })
          }
          return d
        }
      },
      M = class extends k {
        async provideDocumentSymbols(e, t) {
          let i = e.uri,
            l = await this._worker(i)
          if (e.isDisposed()) return
          let c = await l.getNavigationTree(i.toString())
          if (!c || e.isDisposed()) return
          let u = (o, a) => ({
            name: o.text,
            detail: '',
            kind: h[o.kind] || r.languages.SymbolKind.Variable,
            range: this._textSpanToRange(e, o.spans[0]),
            selectionRange: this._textSpanToRange(e, o.spans[0]),
            tags: [],
            children: o.childItems?.map(p => u(p, o.text)),
            containerName: a,
          })
          return c.childItems ? c.childItems.map(o => u(o)) : []
        }
      },
      m = class {
        static {
          this.unknown = ''
        }
        static {
          this.keyword = 'keyword'
        }
        static {
          this.script = 'script'
        }
        static {
          this.module = 'module'
        }
        static {
          this.class = 'class'
        }
        static {
          this.interface = 'interface'
        }
        static {
          this.type = 'type'
        }
        static {
          this.enum = 'enum'
        }
        static {
          this.variable = 'var'
        }
        static {
          this.localVariable = 'local var'
        }
        static {
          this.function = 'function'
        }
        static {
          this.localFunction = 'local function'
        }
        static {
          this.memberFunction = 'method'
        }
        static {
          this.memberGetAccessor = 'getter'
        }
        static {
          this.memberSetAccessor = 'setter'
        }
        static {
          this.memberVariable = 'property'
        }
        static {
          this.constructorImplementation = 'constructor'
        }
        static {
          this.callSignature = 'call'
        }
        static {
          this.indexSignature = 'index'
        }
        static {
          this.constructSignature = 'construct'
        }
        static {
          this.parameter = 'parameter'
        }
        static {
          this.typeParameter = 'type parameter'
        }
        static {
          this.primitiveType = 'primitive type'
        }
        static {
          this.label = 'label'
        }
        static {
          this.alias = 'alias'
        }
        static {
          this.const = 'const'
        }
        static {
          this.let = 'let'
        }
        static {
          this.warning = 'warning'
        }
      },
      h = Object.create(null)
    h[m.module] = r.languages.SymbolKind.Module
    h[m.class] = r.languages.SymbolKind.Class
    h[m.enum] = r.languages.SymbolKind.Enum
    h[m.interface] = r.languages.SymbolKind.Interface
    h[m.memberFunction] = r.languages.SymbolKind.Method
    h[m.memberVariable] = r.languages.SymbolKind.Property
    h[m.memberGetAccessor] = r.languages.SymbolKind.Property
    h[m.memberSetAccessor] = r.languages.SymbolKind.Property
    h[m.variable] = r.languages.SymbolKind.Variable
    h[m.const] = r.languages.SymbolKind.Variable
    h[m.localVariable] = r.languages.SymbolKind.Variable
    h[m.variable] = r.languages.SymbolKind.Variable
    h[m.function] = r.languages.SymbolKind.Function
    h[m.localFunction] = r.languages.SymbolKind.Function
    var x = class extends k {
        static _convertOptions(e) {
          return {
            ConvertTabsToSpaces: e.insertSpaces,
            TabSize: e.tabSize,
            IndentSize: e.tabSize,
            IndentStyle: 2,
            NewLineCharacter: `
`,
            InsertSpaceAfterCommaDelimiter: !0,
            InsertSpaceAfterSemicolonInForStatements: !0,
            InsertSpaceBeforeAndAfterBinaryOperators: !0,
            InsertSpaceAfterKeywordsInControlFlowStatements: !0,
            InsertSpaceAfterFunctionKeywordForAnonymousFunctions: !0,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: !1,
            InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: !1,
            InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: !1,
            PlaceOpenBraceOnNewLineForControlBlocks: !1,
            PlaceOpenBraceOnNewLineForFunctions: !1,
          }
        }
        _convertTextChanges(e, t) {
          return { text: t.newText, range: this._textSpanToRange(e, t.span) }
        }
      },
      A = class extends x {
        constructor() {
          super(...arguments)
          this.canFormatMultipleRanges = !1
        }
        async provideDocumentRangeFormattingEdits(t, i, l, c) {
          let u = t.uri,
            g = t.getOffsetAt({ lineNumber: i.startLineNumber, column: i.startColumn }),
            o = t.getOffsetAt({ lineNumber: i.endLineNumber, column: i.endColumn }),
            a = await this._worker(u)
          if (t.isDisposed()) return
          let d = await a.getFormattingEditsForRange(u.toString(), g, o, x._convertOptions(l))
          if (!(!d || t.isDisposed())) return d.map(p => this._convertTextChanges(t, p))
        }
      },
      R = class extends x {
        get autoFormatTriggerCharacters() {
          return [
            ';',
            '}',
            `
`,
          ]
        }
        async provideOnTypeFormattingEdits(e, t, i, l, c) {
          let u = e.uri,
            g = e.getOffsetAt(t),
            o = await this._worker(u)
          if (e.isDisposed()) return
          let a = await o.getFormattingEditsAfterKeystroke(u.toString(), g, i, x._convertOptions(l))
          if (!(!a || e.isDisposed())) return a.map(d => this._convertTextChanges(e, d))
        }
      },
      O = class extends x {
        async provideCodeActions(e, t, i, l) {
          let c = e.uri,
            u = e.getOffsetAt({ lineNumber: t.startLineNumber, column: t.startColumn }),
            g = e.getOffsetAt({ lineNumber: t.endLineNumber, column: t.endColumn }),
            o = x._convertOptions(e.getOptions()),
            a = i.markers
              .filter(b => b.code)
              .map(b => b.code)
              .map(Number),
            d = await this._worker(c)
          if (e.isDisposed()) return
          let p = await d.getCodeFixesAtPosition(c.toString(), u, g, a, o)
          return !p || e.isDisposed()
            ? { actions: [], dispose: () => {} }
            : {
                actions: p
                  .filter(b => b.changes.filter(y => y.isNewFile).length === 0)
                  .map(b => this._tsCodeFixActionToMonacoCodeAction(e, i, b)),
                dispose: () => {},
              }
        }
        _tsCodeFixActionToMonacoCodeAction(e, t, i) {
          let l = []
          for (let u of i.changes)
            for (let g of u.textChanges)
              l.push({
                resource: e.uri,
                versionId: void 0,
                textEdit: { range: this._textSpanToRange(e, g.span), text: g.newText },
              })
          return { title: i.description, edit: { edits: l }, diagnostics: t.markers, kind: 'quickfix' }
        }
      },
      E = class extends k {
        constructor(t, i) {
          super(i)
          this._libFiles = t
        }
        async provideRenameEdits(t, i, l, c) {
          let u = t.uri,
            g = u.toString(),
            o = t.getOffsetAt(i),
            a = await this._worker(u)
          if (t.isDisposed()) return
          let d = await a.getRenameInfo(g, o, { allowRenameOfImportPath: !1 })
          if (d.canRename === !1) return { edits: [], rejectReason: d.localizedErrorMessage }
          if (d.fileToRename !== void 0) throw new Error('Renaming files is not supported.')
          let p = await a.findRenameLocations(g, o, !1, !1, !1)
          if (!p || t.isDisposed()) return
          let f = []
          for (let b of p) {
            let y = this._libFiles.getOrCreateModel(b.fileName)
            if (y)
              f.push({
                resource: y.uri,
                versionId: void 0,
                textEdit: { range: this._textSpanToRange(y, b.textSpan), text: l },
              })
            else throw new Error(`Unknown file ${b.fileName}.`)
          }
          return { edits: f }
        }
      },
      N = class extends k {
        async provideInlayHints(e, t, i) {
          let l = e.uri,
            c = l.toString(),
            u = e.getOffsetAt({ lineNumber: t.startLineNumber, column: t.startColumn }),
            g = e.getOffsetAt({ lineNumber: t.endLineNumber, column: t.endColumn }),
            o = await this._worker(l)
          return e.isDisposed()
            ? null
            : {
                hints: (await o.provideInlayHints(c, u, g)).map(p => ({
                  ...p,
                  label: p.text,
                  position: e.getPositionAt(p.position),
                  kind: this._convertHintKind(p.kind),
                })),
                dispose: () => {},
              }
        }
        _convertHintKind(e) {
          switch (e) {
            case 'Parameter':
              return r.languages.InlayHintKind.Parameter
            case 'Type':
              return r.languages.InlayHintKind.Type
            default:
              return r.languages.InlayHintKind.Type
          }
        }
      }
    var V, j
    function ue(s) {
      j = X(s, 'typescript')
    }
    function ge(s) {
      V = X(s, 'javascript')
    }
    function pe() {
      return new Promise((s, e) => {
        if (!V) return e('JavaScript not registered!')
        s(V)
      })
    }
    function de() {
      return new Promise((s, e) => {
        if (!j) return e('TypeScript not registered!')
        s(j)
      })
    }
    function X(s, e) {
      let t = [],
        i = [],
        l = new v(e, s)
      t.push(l)
      let c = (...o) => l.getLanguageServiceWorker(...o),
        u = new _(c)
      function g() {
        let { modeConfiguration: o } = s
        Y(i),
          o.completionItems && i.push(r.languages.registerCompletionItemProvider(e, new C(c))),
          o.signatureHelp && i.push(r.languages.registerSignatureHelpProvider(e, new I(c))),
          o.hovers && i.push(r.languages.registerHoverProvider(e, new P(c))),
          o.documentHighlights && i.push(r.languages.registerDocumentHighlightProvider(e, new D(c))),
          o.definitions && i.push(r.languages.registerDefinitionProvider(e, new F(u, c))),
          o.references && i.push(r.languages.registerReferenceProvider(e, new L(u, c))),
          o.documentSymbols && i.push(r.languages.registerDocumentSymbolProvider(e, new M(c))),
          o.rename && i.push(r.languages.registerRenameProvider(e, new E(u, c))),
          o.documentRangeFormattingEdits &&
            i.push(r.languages.registerDocumentRangeFormattingEditProvider(e, new A(c))),
          o.onTypeFormattingEdits && i.push(r.languages.registerOnTypeFormattingEditProvider(e, new R(c))),
          o.codeActions && i.push(r.languages.registerCodeActionProvider(e, new O(c))),
          o.inlayHints && i.push(r.languages.registerInlayHintsProvider(e, new N(c))),
          o.diagnostics && i.push(new T(u, s, e, c))
      }
      return g(), t.push(fe(i)), c
    }
    function fe(s) {
      return { dispose: () => Y(s) }
    }
    function Y(s) {
      for (; s.length; ) s.pop().dispose()
    }
    return ae(me)
  })()
  return moduleExports
})
