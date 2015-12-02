import { animate, Promise} from "liquid-fire";

export default function(opts={}) {
  if (!this.newElement) {
    return Promise.resolve();
  } else if (!this.oldElement) {
    this.newElement.css({visibility: ''});
    return Promise.resolve();
  }

  opts.queue = false;
  let oldFontSize = this.oldElement.css('font-size');
  let newFontSize = this.newElement.css('font-size');

  if (opts.movingSide === 'new') {
    let motion = {
      fontSize: [oldFontSize, newFontSize ],
    };
    this.oldElement.css({ visibility: 'hidden' });
    return Promise.all([
      this.lookup('fly-to').apply(this),
      animate(this.newElement, motion, opts),
    ]);
  } else {
    let motion = {
      fontSize: newFontSize,
    };
    this.newElement.css({ visibility: 'hidden' });
    return Promise.all([
      this.lookup('fly-to').apply(this),
      animate(this.oldElement, motion, opts).then(() => {
        this.newElement.css({ visibility: ''});
      }),
    ]);
  }
}
