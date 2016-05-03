'use strict';

let helper = {
	$on: (target, type, callback, useCapture) => {
		target.addEventListener(type, callback, !!useCapture);
	},

	qs: (selector, scope) => {
		return (scope || document).querySelector(selector);
	},

	qsa: (selector, scope) => {
		return (scope || document).querySelectorAll(selector);
	},

	$delegate: (target, selector, type, handler) => {
		let dispatchEvent = event => {
			const targetElement = event.target;
			const potentialElements = helper.qsa(selector, target);
			const hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

			if (hasMatch) {
				handler.call(targetElement, event);
			}
		};

		// https://developer.mozilla.org/en-US/docs/Web/Events/blur
		const useCapture = type === 'blur' || type === 'focus';

		helper.$on(target, type, dispatchEvent, useCapture);
	},

	$parent: (element, tagName) => {
		if (!element.parentNode) {
			return;
		}

		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}

		return helper.$parent(element.parentNode, tagName);
	}
};

module.exports = helper;
// Allow for looping on nodes by chaining:
// qsa('.foo').forEach(function () {})
NodeList.prototype.forEach = Array.prototype.forEach;
