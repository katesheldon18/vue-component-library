import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from '../Button.vue'

describe('Button', () => {
    it('renders fallback button text with the default variant and type', () => {
        const wrapper = mount(Button)
        const button = wrapper.get('button')

        expect(button.text()).toBe('Click')
        expect(button.attributes('type')).toBe('button')
        expect(button.classes()).toContain('button--primary')
        expect(button.attributes('aria-busy')).toBeUndefined()
        expect(button.attributes('aria-disabled')).toBeUndefined()
    })

    it('renders default and icon slots', () => {
        const wrapper = mount(Button, {
            slots: {
                default: 'Save changes',
                icon: '<span data-testid="icon">+</span>',
            },
        })

        expect(wrapper.text()).toContain('Save changes')
        expect(wrapper.get('[data-testid="icon"]').text()).toBe('+')
    })

    it('applies variant, size, custom class, and button type props', () => {
        const wrapper = mount(Button, {
            props: {
                className: 'action-button',
                size: 'lg',
                type: 'submit',
                variant: 'secondary',
            },
        })
        const button = wrapper.get('button')

        expect(button.attributes('type')).toBe('submit')
        expect(button.classes()).toEqual(
            expect.arrayContaining([
                'button',
                'button--secondary',
                'button--lg',
                'action-button',
            ]),
        )
    })

    it('sets native and aria disabled state when disabled', () => {
        const wrapper = mount(Button, {
            props: {
                disabled: true,
            },
        })
        const button = wrapper.get('button')

        expect(button.attributes('disabled')).toBeDefined()
        expect(button.attributes('aria-disabled')).toBe('true')
    })

    it('shows loading state while keeping the label available in the DOM', () => {
        const wrapper = mount(Button, {
            props: {
                loading: true,
            },
            slots: {
                default: 'Saving',
            },
        })
        const button = wrapper.get('button')

        expect(button.classes()).toContain('is-loading')
        expect(button.attributes('aria-busy')).toBe('true')
        expect(wrapper.get('button > span').classes()).toContain('is-hidden')
        expect(wrapper.get('.spinner').exists()).toBe(true)
        expect(wrapper.text()).toContain('Saving')
    })
})
