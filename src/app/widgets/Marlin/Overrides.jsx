import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Anchor from '../../components/Anchor';
import i18n from '../../lib/i18n';
import controller from '../../lib/controller';
// import DigitalReadout from './DigitalReadout';
import { NumberInput as Input } from '../../components/Input';
import styles from './index.styl';

const Overrides = (props) => {
    const { speedFactor = 0, extruderFactor = 0, state, actions } = props;

    return (
        <div className={styles.overrides}>
            <table className={styles['parameter-table']} style={{ margin: '10px 0' }}>
                <tbody>
                    <tr>
                        <td style={{ width: '80px', padding: '0' }}>
                            <p style={{ width: '80px', margin: '0', padding: '0 6px' }}>{i18n._('Motion')}</p>
                        </td>
                        <td style={{ width: '40px' }}>
                            <div className="input-group input-group-sm" style={{ float: 'right' }}>
                                {speedFactor}
                                <span style={{ margin: '0 4px' }}>%</span>
                            </div>
                        </td>
                        <td style={{ width: '80px' }}>
                            <div className="input-group input-group-sm" style={{ width: '100%', zIndex: '0' }}>
                                <span style={{ margin: '0 4px' }}>/</span>
                                <Input
                                    style={{ width: '50px' }}
                                    value={speedFactor}
                                    min={0}
                                    max={500}
                                    onChange={actions.changeSpeedFactor}
                                />
                                <span style={{ margin: '0 4px' }}>%</span>
                            </div>
                        </td>
                        <td style={{ width: '52px' }}>
                            <Anchor
                                className={classNames('fa', 'fa-check', styles['fa-btn'])}
                                aria-hidden="true"
                                onClick={() => {
                                    // controller.command('speedFactor', state.speedFactor);
                                    controller.command('factor:speed', 'workspace', state.speedFactor);
                                }}
                            />
                            <Anchor
                                className="fa fa-undo fa-fw"
                                onClick={() => {
                                    // controller.command('speejFactor', 100);
                                    controller.command('factor:speed', 'workspace', 100);
                                }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '80px', padding: '0' }}>
                            <p style={{ width: '80px', margin: '0', padding: '0 6px' }}>{i18n._('Extruder')}</p>
                        </td>
                        <td style={{ width: '40px' }}>
                            <div className="input-group input-group-sm" style={{ float: 'right' }}>
                                {extruderFactor}
                                <span style={{ margin: '0 4px' }}>%</span>
                            </div>
                        </td>
                        <td style={{ width: '80px' }}>
                            <div className="input-group input-group-sm" style={{ width: '100%', zIndex: '0' }}>
                                <span style={{ margin: '0 4px' }}>/</span>
                                <Input
                                    style={{ width: '50px' }}
                                    value={extruderFactor}
                                    min={0}
                                    max={500}
                                    onChange={actions.changeExtruderFactor}
                                />
                                <span style={{ margin: '0 4px' }}>%</span>
                            </div>
                        </td>
                        <td style={{ width: '52px' }}>
                            <Anchor
                                className={classNames('fa', 'fa-check', styles['fa-btn'])}
                                aria-hidden="true"
                                onClick={() => {
                                    // controller.command('factor:extruder', state.extruderFactor);
                                    controller.command('factor:extruder', 'workspace', state.extruderFactor);
                                }}
                            />
                            <Anchor
                                className="fa fa-undo fa-fw"
                                onClick={() => {
                                    // controller.command('factor:extruder', 100);
                                    controller.command('factor:extruder', 'workspace', 100);
                                }}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

Overrides.propTypes = {
    speedFactor: PropTypes.number,
    extruderFactor: PropTypes.number,
    state: PropTypes.object,
    actions: PropTypes.object
};

export default Overrides;
